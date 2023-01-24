<?php
    class Register {
        protected $data = array() ;
        protected $login_data = array();
        protected $character = array();
        function __construct () {
        }
        
        function _read ($email, $pass, $def_char) {
            $this->data['email'] = $email ;
            $this->data['pass'] = $pass;
            $this->data['def_char'] = $def_char;
        }

        function _read_login ($email, $pass) {
            $this->login_data['email'] = $email ;
            $this->login_data['pass'] = $pass;
        }

        function _read_def_character($def_char){
            $this->character['def_char'] = $def_char;
        }
    }
?>