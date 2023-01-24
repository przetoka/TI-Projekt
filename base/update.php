<?php
    function __autoload($class_name) {
        include $class_name . '.php' ;
    }
    
    $reg = new Register_new ;
    $data = $_POST['data'] ;
    $obj  = json_decode($data) ;
    $reg->_read_def_character($obj->def_char);
    $flag =  $reg->_update_user();
    print_r($flag);
?>