<?php

namespace App\Controllers;

/**
 * Class IndexController
 * Наследуем полезные методы от \Bramus\Router\Router
 *
 * @package App\Controllers
 */
class IndexController extends \Bramus\Router\Router{
    
    /**
     * entry point controller
     * @param null $path
     *
     * @return mixed
     */
    public function index($path = null)
    {
        try{
            $D = $this->getConf(); // массив параметров для шаблона
            
            return require TEMPLATE_PATH . 'index.php';
        }catch(\Exception $e){
            // Страница не найдена
            header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
            return require TEMPLATE_PATH . '404.php';
        }
    }
    
    /**
     * @return array
     * @throws \Exception
     */
    private function getConf()
    {
        $defaultConf = require_once CONFIG_PATH . 'domains/_default.php';
        $currentConf = [];
        $currentConfPath = CONFIG_PATH . 'domains/'.mb_strtolower($_SERVER['HTTP_HOST']).'.php';
        if(file_exists($currentConfPath)){
            $currentConf = require_once $currentConfPath;
        }
        
        $conf = [];
        foreach($defaultConf as $k => $v){
            $k = mb_strtolower($k);
            if(isset($currentConf[$k])){
                $conf[$k] = array_merge($v, $currentConf[$k]);
            } else {
                $conf[$k] = $v;
            }
        }
        foreach($currentConf as $k => $v){
            $k = mb_strtolower($k);
            if(!isset($conf[$k])){
                $conf[$k] = $v;
            }
        }
        
        $uri = mb_strtolower($this->getCurrentUri());
        if(!isset($conf[$uri])){
            throw new \Exception('404 not fount: '.$uri);
        }
        return $this->escapeQuotesInArray($conf[$uri]);
    }

    /**
     * Метод экранирует слеши в строках для дальнейшего json кодирования
     *
     * @param array $data
     * @return array
     */
    private function escapeQuotesInArray($data){
        foreach($data as $k => $v){
            if(is_array($v)){
                $data[$k] = $this->escapeQuotesInArray($v);
            }
            if(is_string($v)){
                $data[$k] = preg_replace("/[\"\']/", '\\"', $v);
            }
        }
        return $data;
    }
}