<?php
    function __autoload($class_name) {
        include $class_name . '.php' ;
    }
    $reg = new Register_new ;
    $data = $_POST['data'] ;
    $obj  = json_decode($data) ;
    $reg->_read($obj->email, $obj->pass, "cat");
    $flag =  $reg->_save();
    print_r($flag);
?>