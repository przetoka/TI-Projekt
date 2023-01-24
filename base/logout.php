<?php
    function __autoload($class_name) {
        include $class_name . '.php' ;
    }
    
    $user = new Register_new;
    $result = $user->_logout();
    print_r($result);
?>