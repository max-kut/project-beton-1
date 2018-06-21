<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 06.06.18
 * Time: 13:44
 */

namespace App\Console\Command;


use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Class AmoTestCommand
 * команда только для ручного тестирования API амо
 *
 * @package App\Console\Command
 */
class AmoTestCommand extends Command
{
    /**
     * configure command
     */
    protected function configure()
    {
        $this
            ->setName('amo:test')
            ->setDescription('testing api');
    }
    
    /**
     * @param \Symfony\Component\Console\Input\InputInterface $input
     * @param \Symfony\Component\Console\Output\OutputInterface $output
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $config = require CONFIG_PATH . 'amocrm_auth.php';
        $amo = new \AmoCRM\Client(
            $config['domain'],
            $config['user'],
            $config['hash']
        );
        
        dump(
            $amo->contact->apiList(['id'=>47329821])
        );
    }
}