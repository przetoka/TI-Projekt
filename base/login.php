<?php
    function __autoload($class_name) {
        include $class_name . '.php';
    }
    $reg = new Register_new ;

    $data = $_POST['data'] ;
    $obj  = json_decode($data) ;
    $reg->_read_login($obj->email, $obj->pass);
    $result = $reg->_login();
    
    print_r($result);
?>