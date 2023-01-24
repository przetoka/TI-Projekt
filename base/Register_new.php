<?php
    class Register_new extends Register {
        private $dbh;
        private $dbfile = "files/datadb.db" ;

        function __construct () {
            parent::__construct() ;
            session_start() ;
        }

        function _save () {
            $this->dbh = dba_open( $this->dbfile, "c");
            $serialized_data = serialize($this->data);                
            if(dba_insert($this->data['email'],$serialized_data, $this->dbh))
                $text = "Zarejestrowano";

            else {
                $text = "Podany email istnieje w bazie";
            }
            dba_close($this->dbh);
            return $text;
        }

        function _login() {
            $pass1 = $this->login_data['pass'];
            $email1 = $this->login_data['email'];
            $access = false ;
            $this->dbh = dba_open( $this->dbfile, "r");
            $serialized_data = dba_fetch($email1, $this->dbh);
            $this->data = unserialize($serialized_data);
            if ($this->data ['pass'] == $pass1 ) {
                $_SESSION['auth'] = 'OK' ;
                $_SESSION['user'] = $email1 ;
                $_SESSION['animal'] = $this->data['def_char'];
                $access = true ;
            }
            dba_close($this->dbh) ;
            $text = ( $access ? 'Uzytkownik zalogowany' : ' Zły login lub hasło ' ) ;
            return $text;
        }
        
        function _is_logged() {
            if ( isset ( $_SESSION['auth'] ) ) {
                $ret = $_SESSION['auth'] == 'OK'? true: false;
            } 
            else { 
                $ret = false;
            }
            return $ret ;
        }

        function _logout() {
            unset($_SESSION);
            session_destroy();
            return "Wylogowano";
        }


        function _update_user() {
            $email = $_SESSION['user'] ;
            $this->dbh = dba_open( $this->dbfile, "c");
            $text = $this->character['def_char'];
            if (dba_exists($email, $this->dbh)){
                $serialized_data = dba_fetch($email, $this->dbh);
                $this->data = unserialize($serialized_data);
                $this->data['def_char'] = $this->character['def_char'];
                $serialized_data = serialize($this->data);
                dba_replace($this->data['email'],$serialized_data, $this->dbh);
                $_SESSION['animal'] = $this->data['def_char'];
            }
            dba_close($this->dbh) ;
        }

        function _get_default_animal() {
            $email = $_SESSION['user'] ;
            $this->dbh = dba_open( $this->dbfile, "rt");
            $serialized_data = dba_fetch($email, $this->dbh) ;
            $this->data = unserialize($serialized_data);
            dba_close($this->dbh) ;
            return $this->data['def_char'];
            // return 'lslsl';
        }
    }
?>