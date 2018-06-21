<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 03.06.18
 * Time: 14:32
 */

namespace App\Controllers;


use App\DB;
use SuperClosure\Serializer;

trait JobTrait
{
    /**
     * @param callable $job
     *
     * @return bool
     */
    private function addJob(callable $job)
    {
        $DB = new DB();
        $serializer = new Serializer();
        $id = $DB->insert(
            "jobs",
            [
                'job' => $serializer->serialize($job),
                'created_at' => $DB->now()
            ]
        );
        
        return $id;
    }
}