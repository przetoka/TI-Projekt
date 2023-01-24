<?php
    function __autoload($class_name) {
        include $class_name . '.php' ;
    }
    
    $reg = new Register_new ;
    $flag =  $reg->_get_default_animal();
    echo $flag;
?>