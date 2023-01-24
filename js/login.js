function openLoginForm() {
    document.getElementById("LoginForm").style.display = "block";
    document.getElementById("RegisterForm").style.display = "none";
}
  
function closeLoginForm() {
    document.getElementById("LoginForm").style.display = "none";
}

function openRegisterForm() {
    document.getElementById("RegisterForm").style.display = "block";
    document.getElementById("LoginForm").style.display = "none";
}
  
function closeRegisterForm() {
    document.getElementById("RegisterForm").style.display = "none";
}

function setCatAsDefault(){
    window.localStorage.setItem('def_char', 'cat');
    var def_char = "cat";
    document.getElementById("animal_name").innerHTML = def_char;

    var json_data = "{\"def_char\":\"" + def_char + "\"}" ;
    var msg = "data=" + encodeURIComponent(json_data) ;
    var url = "./base/update.php" ;
    
    resp = function(response) {   
    }
    xmlhttpPost (url, msg, resp) ; 
}

function setPigAsDefault(){
    window.localStorage.setItem('def_char', 'pig');
    var def_char = "pig";

    var json_data = "{\"def_char\":\"" + def_char + "\"}" ;
    var msg = "data=" + encodeURIComponent(json_data) ;
    var url = "./base/update.php" ;
    
    resp = function(response) {   
    }
    xmlhttpPost (url, msg, resp) ; 
    document.getElementById("animal_name").innerHTML = def_char;
}

function setDogAsDefault(){
    window.localStorage.setItem('def_char', 'dog');
    var def_char = "dog";
    document.getElementById("animal_name").innerHTML = def_char;


    var json_data = "{\"def_char\":\"" + def_char + "\"}";
    var msg = "data=" + encodeURIComponent(json_data) ;
    var url = "./base/update.php" ;

    resp = function(response) { 
    }
    xmlhttpPost (url, msg, resp) ; 
}


function default_animation(){ 
    var json_data = "";
    var msg = "data=" + encodeURIComponent(json_data) ;
    var url = "./base/get_default.php" ;

    resp = function(response) { 
        if(response == "cat")
            animate_cat();
        else if(response == "pig")
            animate_pig();
        else
            animate_dog();
    }
    xmlhttpPost (url, msg, resp); 
}

function default_animation_offline(){
    var def_char = window.localStorage.getItem('def_char');

    if(def_char == "cat")
        animate_cat();
    else if(def_char == "pig")
        animate_pig();
    else if(def_char == "dog")
        animate_dog();
}

function logout(){
    document.getElementById("ResponseForm").style.display = "block";

    var msg = "";
    var url = "./base/logout.php" ;
    
    resp = function(response) {
        document.getElementById("response").innerHTML = response;
    }

    xmlhttpPost (url, msg, resp) ; 
    setTimeout(function(){
        window.location.reload();
     }, 1000);
}

function login(){
    var email = document.getElementById("email1").value ;
    var pass = document.getElementById("pass1").value ;
    document.getElementById("LoginForm").style.display = "none";
    

    var json_data = "{\"email\":\"" + email + "\",\"pass\":\"" + pass +"\"}" ;
    var msg = "data=" + encodeURIComponent(json_data) ;

    var url = "./base/login.php" ;
    
    resp = function(response) {   
        document.getElementById("ResponseForm").style.display = "block";
        document.getElementById("response").innerHTML += response;
    }
    

    xmlhttpPost (url, msg, resp) ;
    setTimeout(function(){
        document.location.reload();
    }, 1000);document.location.reload();document.location.reload();document.location.reload();
}


function register(){
    document.getElementById("RegisterForm").style.display = "none";
    
    var email = document.getElementById("email2").value ;
    var pass = document.getElementById("pass2").value ;
    document.getElementById("ResponseForm").style.display = "block";
    
    var json_data = "{\"email\":\"" + email + "\",\"pass\":\"" + pass +"\"}" ;
    var msg = "data=" + encodeURIComponent(json_data) ;
    var url = "./base/register.php";

    resp = function(response) {
        document.getElementById("response").innerHTML += response;
    }

    xmlhttpPost (url, msg, resp) ; 
}

function xmlhttpPost(strURL, mess, respFunc) {
    var xmlHttpReq = false;
    var self = this;
    if (window.XMLHttpRequest) {
        self.xmlHttpReq = new XMLHttpRequest();
    }

    else if (window.ActiveXObject) {
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.onreadystatechange = function() {
    if(self.xmlHttpReq.readyState == 4){
        if ( self.xmlHttpReq.status == 200 ) {    
          respFunc( self.xmlHttpReq.responseText ) ;
        }
        else if ( self.xmlHttpReq.status == 401 ) {
           window.location.reload() ;
        } 
      }
    }
    self.xmlHttpReq.open('POST', strURL);
    self.xmlHttpReq.setRequestHeader("X-Requested-With","XMLHttpRequest");
    self.xmlHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded; ");
    self.xmlHttpReq.send(mess);        
}