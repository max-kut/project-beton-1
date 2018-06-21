<?php

namespace App\Controllers;

use App\DB;
use SuperClosure\Serializer;

/**
 * Class AmoWebhooksController
 *
 * @package App\Controllers
 */
class AmoWebhooksController
{
    use JobTrait;
    
    /**
     * entry point controller
     */
    public function action()
    {
        if(!empty($_POST['leads']['add'])){
            $this->addLeadHook();
        }
        if(!empty($_POST['leads']['update'])){
            $this->updateLeadHook();
        }
        if(!empty($_POST['contacts']['note'])){
            $this->contactsNoteHook();
        }
        
        header("HTTP/1.1 200 OK");
        exit("OK");
    }
    
    /**
     * @return \AmoCRM\Client
     */
    private function getAmo()
    {
        $config = require CONFIG_PATH . 'amocrm_auth.php';
        $amo = new \AmoCRM\Client(
            $config['domain'],
            $config['user'],
            $config['hash']
        );
        return $amo;
    }
    
    
    /**
     * @return bool
     */
    private function updateLeadHook()
    {
        $amo = $this->getAmo();
        $post = $_POST;
        
        
        $job = function() use ($amo, $post){
            
            try {
                foreach ($post['leads']['update'] as $reqLead) {
                    if (empty($reqLead['custom_fields'])) {
                        continue;
                    }
                    
                    
                    $payMethod = 'nal';
                    $price = 0; //приход
                    foreach ($reqLead['custom_fields'] as $cf) {
                        $name = trim($cf['name']);
                        if ($name == 'Способ оплаты') {
                            $payMethod =
                                    ($cf['values'][0]['value'] == 'Безналичный' ?
                                        'beznal' :
                                        'nal');
                        }
                        if ($name == 'Приход') {
                            $price += $cf['values'][0]['value'];
                        }
                        if ($name == 'Расход') {
                            $price -= $cf['values'][0]['value'];
                        }
                        if ($name == 'Доп. расход 1') {
                            $price -= $cf['values'][0]['value'];
                        }
                        if ($name == 'Доп. расход 2') {
                            $price -= $cf['values'][0]['value'];
                        }
                        if ($name == 'Бонус') {
                            $price -= $cf['values'][0]['value'];
                        }
                        if ($name == 'АБН') {
                            $price -= $cf['values'][0]['value'];
                        }
                    }
                    if ($price <= 0) {
                        $price = 0;
                    }
                    if ($payMethod == 'beznal') {
                        $price = $price * 0.9;
                    }
                    // только целые значения!
                    $price = (int)$price;
                    if ( $reqLead['price'] != $price ) {
                    
                        $lead = $amo->lead;
                        $lead['price'] = $price;
                        sleep(1);
                        $lead->apiUpdate($reqLead['id']);
                    }
                }
            } catch (\Exception $e) {
                writeToLog($e->getMessage());
            }
        };
        
        return $this->addJob($job);
    }
    
    /**
     * @return bool
     */
    private function contactsNoteHook()
    {
        $amo = $this->getAmo();
        $post = $_POST;
        
        $job = function()use($amo,$post){
            
            try {
                // Типы примечаний
                $noteTypes = [
                    10, // входящие звонки
                ];
                foreach ($post['contacts']['note'] as $postNote) {
                    $postNote = $postNote['note'];
                    if((int)$postNote['element_type'] == 1 &&
                        in_array((int)$postNote['note_type'], $noteTypes)){
                        
                        $contactId = $postNote['element_id'];
                        sleep(1);
                        $contact = $amo->contact->apiList([ 'id'=>$contactId ])[0];
    
                        $linkedLeads = $contact['linked_leads_id'] ?: [];
    
                        // Если к контакту прикреплена запись разговора
                        // и у него нет сделок
                        if(empty($linkedLeads)){
                            // то создадим сделку
                            $lead = $amo->lead;
                            $lead['name'] = $contact['name'];
                            $lead['responsible_user_id'] = $contact['responsible_user_id'];
                            
                            $phoneName = preg_replace("/[^0-9]/","",$contact['name']);
                            $tags = [];
                            if(preg_match("/4999384878/",$phoneName)){
                                $tags[] = 'rbu_beton';
                            }
                            if(preg_match("/4951183636/",$phoneName)){
                                $tags[] = 'BSU';
                            }
                            if(!empty($tags)){
                                $lead['tags'] = $tags;
                            }
                            
                            $linkedLeads[] = $lead->apiAdd();
                            sleep(1);
                            $contact = $amo->contact;
                            $contact['linked_leads_id'] = $linkedLeads;
                            $contact->apiUpdate((int)$contactId, 'now');
                        }
                    }
                }
            } catch (\Exception $e) {
                writeToLog($e->getMessage());
            }
        };
    
        return $this->addJob($job);
    }
    
    private function addLeadHook()
    {
        $amo = $this->getAmo();
        $post = $_POST;
        
        $job = function()use($amo,$post){
            try {
                foreach ($post['leads']['add'] as $reqLead) {
                    $leadTags = [];
                    $fullLead = $amo->lead->apiList(['id'=>$reqLead['id']])[0];
                    if(!empty($fullLead['tags'])){
                        foreach ($fullLead['tags'] as $tag){
                            $leadTags[] = $tag['name'];
                        }
                    }
                    $tags = [];
                    $phoneName = preg_replace("/[^0-9]/","",$reqLead['name']);
                    if(preg_match("/4999384878/",$phoneName)){
                        $tags[] = 'rbu_beton';
                    }
                    if(preg_match("/4951183636/",$phoneName)){
                        $tags[] = 'BSU';
                    }
                    if(!empty($tags)){
                        $_tags = array_unique(array_merge($leadTags,$tags));
                        if(!empty(array_diff($_tags,$leadTags))){
                            $lead = $amo->lead;
                            $lead['tags'] = $_tags;
                            sleep(1);
                            $lead->apiUpdate((int)$reqLead['id']);
                        }
                    }
                }
            } catch (\Exception $e) {
                writeToLog($e->getMessage());
            }
        };
        return $this->addJob($job);
    }
}
