<?php
session_start();

require_once __DIR__ . '/../bootstrap.php';

// Запихнем utm метки в сессию
foreach($_GET as $k => $v){
    if(stripos($k, 'utm_') !== false){
        $_SESSION[$k] = $v;
    }
}

$router = new \Bramus\Router\Router();

// Контроллеры в \App\Controllers
$router->setNamespace('\App\Controllers');


// главная страница
$router->get('/([A-Za-z0-9_-]+)?', 'IndexController@index');

$router->post('/', 'FormController@action');

$router->post('/amo-webhooks', 'AmoWebhooksController@action');

$router->set404(function () {
    header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
    return require TEMPLATE_PATH . '404.php';
});

$router->run();
