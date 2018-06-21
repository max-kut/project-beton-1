<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 02.06.18
 * Time: 18:08
 */

namespace App\Console\Command;


use App\DB;
use SuperClosure\Serializer;
use Symfony\Component\Cache\Simple\FilesystemCache;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class AmoWorkerCommand extends Command
{
    /** @var \React\EventLoop\LoopInterface */
    private $loop;
    /** @var FilesystemCache */
    private $cache;
    /** @var OutputInterface */
    private $output;
    /** @var InputInterface */
    private $input;
    /** @var DB */
    private $DB;
    
    /**
     * Configure command
     */
    protected function configure()
    {
        $this
            ->setName('amo:worker')
            ->setDescription('manage daemon for amo integrations')
            ->addOption(
                "daemon",
                'd',
                InputOption::VALUE_NONE,
                "run worker as daemon"
            )
            ->addOption(
                "stop",
                's',
                InputOption::VALUE_NONE,
                "stopping worker"
            )
            ->addOption(
                "restart",
                'r',
                InputOption::VALUE_NONE,
                "signal for restart worker"
            )
            ->addOption(
                "info",
                'i',
                InputOption::VALUE_NONE,
                "show info for worker"
            )
            ->addOption(
                "test",
                "t",
                InputOption::VALUE_NONE,
                "test"
            );
    }
    
    /**
     * @param \Symfony\Component\Console\Input\InputInterface $input
     * @param \Symfony\Component\Console\Output\OutputInterface $output
     *
     * @return array|void
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->input  = $input;
        $this->output = $output;
        $this->cache  = new FilesystemCache();
        
        $options = $input->getOptions();
        
        if ($options['test']) {
            $this->DB = new DB();
            
            $this->getNextJob();
            
            return;
        }
        
        if (!$options['stop'] && !$options['restart'] && !$options['daemon'] && !$options['info']) {
            $this->output->writeln("<info>empty options</info>");
            
            return;
        }
        
        if ($options['info']) {
            
            $lastExecuteTime = $this->cache->get('amocrm.worker.lastExecuteTime');
            dump($lastExecuteTime);
            dump([
                'isRunning'       => $this->cache->get('amocrm.worker.isRunning'),
                'stop'            => $this->cache->get('amocrm.worker.stop'),
                'restart'         => $this->cache->get('amocrm.worker.restart'),
                'lastExecuteTime' => date('c', $lastExecuteTime),
                
            ]);
    
            return;
        }
        
        if ($options['stop']) {
            $this->output->writeln("send stop worker signal");
            $this->cache->set("amocrm.worker.stop", true);
            $this->cache->set("amocrm.worker.restart", false);
            
            return;
        }
        
        if ($options['restart']) {
            $this->output->writeln("send restart worker signal");
            $this->cache->set("amocrm.worker.stop", false);
            $this->cache->set("amocrm.worker.restart", true);
            
            return;
        }
        
        if ($options['daemon']) {
            if ($this->cache->get('amocrm.worker.stop')) {
                $this->output->writeln("<info>worker has stop command!</info>");
                
                return;
            }
    
            $isRunning = $this->cache->get('amocrm.worker.isRunning');
            $lastRunning = $this->cache->get('amocrm.worker.lastExecuteTime', 0);
            
            if (!$isRunning || (time() - $lastRunning > 60)) {
                
                $this->cache->set('amocrm.worker.lastExecuteTime', time());
                $this->cache->set('amocrm.worker.isRunning', true);
                $this->output->writeln("<info>start worker</info>");
                $this->runDaemon();
            } else {
                $this->output->writeln("<info>worker is running!</info>");
            }
        }
        
    }
    
    private function runDaemon()
    {
        $this->loop = \React\EventLoop\Factory::create();
        
        $this->DB   = new DB();
        $serializer = new Serializer();
        
        $this->loop->addPeriodicTimer(1, function () use ($serializer) {
            
            if ($this->cache->get('amocrm.worker.restart') ||
                $this->cache->get('amocrm.worker.stop')) {
                
                $this->cache->set("amocrm.worker.restart", false);
                $this->cache->set('amocrm.worker.isRunning', false);
                $this->loop->stop();
                
                return;
            }
            
            $nextJobRow = $this->getNextJob();
            if (is_null($nextJobRow)) return;
            
            try {
                $this->output->writeln("processing job id={$nextJobRow['id']}");
                $nextJob = $serializer->unserialize($nextJobRow['job']);
                $nextJob();
                $this->output->writeln("job {$nextJobRow['id']} processed");
                sleep(1);
            } catch (\Exception $e) {
                
                if (!$this->DB->ping()) $this->DB->connect();
                
                $id = $this->DB->insert(
                    "failed_jobs",
                    [
                        'job'        => $nextJobRow['job'],
                        'error'      => $e->getMessage() . PHP_EOL . $e->getTraceAsString(),
                        'created_at' => $this->DB->now(),
                    ]
                );
                $this->output->writeln("<error>new failed job id={$id}</error>");
            }
        });
        
        $this->loop->addPeriodicTimer(20, function () {
            // Каждые 20 секунд будем зыписывать в кэш время
            // Это будет дополнительным маяком, что воркер работает
            $this->cache->set('amocrm.worker.lastExecuteTime', time());
        });
        
        $this->loop->addTimer(60 * 60 * 2, function () {
            // каждые 2 часа будем перезагружать воркер
            $this->cache->set("amocrm.worker.restart", true);
        });
        
        
        $this->loop->run();
    }
    
    private function getNextJob()
    {
        if (!$this->DB->ping()) $this->DB->connect();
        
        $row = $this->DB->orderBy('id', "ASC")->getOne('jobs');
        $this->DB->where("id", $row['id'], '=')->delete('jobs');
        
        return $row;
    }
    
}