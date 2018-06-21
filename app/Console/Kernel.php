<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 02.06.18
 * Time: 18:05
 */

namespace App\Console;


use App\Console\Command\AmoTestCommand;
use App\Console\Command\AmoWorkerCommand;
use Symfony\Component\Console\Application;

class Kernel extends Application
{
    /** @var array $commands */
    protected $commands = [
        AmoWorkerCommand::class,
        AmoTestCommand::class,
    ];
    
    /**
     * Kernel constructor.
     *
     * @param string $name
     * @param string $version
     */
    public function __construct($name = 'CONSOLE_APP', $version = '1.1')
    {
        parent::__construct($name, $version);
        
        foreach ($this->commands as $command){
            $this->add(new $command());
        }
    }
}