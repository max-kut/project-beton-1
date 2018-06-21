<?php

namespace App\Controllers;

/**
 * Class FormController
 *
 * @package App\Controllers
 */
class FormController{
    use JobTrait;
    
    /**
     * Entry point
     */
    public function action()
    {
        # игнорируем разрыв соединения с клиентом
        ignore_user_abort(1);
        $this->sendEmail();
        $this->sendToAmo();
    }
    
    /**
     * Отправка емейла
     */
    private function sendEmail(){
        $date = date('d.m.Y');
        $time = date('H:i');
        $phone = $_POST['phone'];

        $site = "Заявка с сайта";
        $to = "betonbsusale@gmail.com";
        $subject = "Новая заявка ({$phone})";
        $headers = "MIME-Version: 1.0\nContent-type: text/html; charset=utf-8\nFrom: {$site}\n";

        ob_start();
        require TEMPLATE_PATH . 'email.php';
        $message = ob_get_clean();

        mail($to, $subject, $message, $headers);
    }
    
    /**
     * Метод добавляет задачу в БД
     * @return bool|int
     */
    private function sendToAmo(){
        $post = $_POST;
        $host = $_SERVER['HTTP_HOST'];
        $cookie = $_COOKIE;
        $session = $_SESSION;
        $amoproConfig = require CONFIG_PATH . 'amopro.php';
        
        $job = function()use($post,$host,$cookie,$session,$amoproConfig){
    
            $amopro = new \AmoPRO\AmoPRO($amoproConfig);
            $amoproOrder = new \AmoPRO\Order();
            
            $amoproOrder->phone = $post['phone'];
            $amoproOrder->name = 'Заявка с сайта ' . $host;
            $amoproOrder->leadName = "Заявка - betonbsu.ru";
            $amoproOrder->amoVisitorUid = $post['amo_visitor_uid'] ?: null;
            
            $amopro->addOrder($amoproOrder)
                ->addLeadTags([$host])
                ->addContactTags([$host]);
    
            $amopro->addLeadField('roistat', $cookie['roistat_visit']);
            if(!empty($post['sum'])){
                $amopro->addCommentLine('Сумма в калькуляторе: ' . $post['sum']);
            }
            if(!empty($post['comment'])){
                $amopro->addCommentLine($post['comment']);
            }
            foreach ( $session as $key => $val ) {
                if ( strpos( $key, 'utm_' ) !== false ) {
                    $amopro->addLeadField($key, $val)
                        ->addCommentLine("{$key}: {$val}");
                }
            }
            $amopro->execute();
        };
        
        return $this->addJob($job);
    }
}