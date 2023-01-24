<?php 
    session_start();
    include './base/Register.php';
    include './base/Register_new.php';
    
    $user = new Register_new;
?>

<!DOCTYPE html>
    <html lang="pl-PL">
        <head>
            <meta charset="utf-8">
            <title>Kot shrödingera</title>
            <script src="./js/login.js"></script>
            <link rel="StyleSheet" href="./css/index.css" type="text/css">
            <link rel="shortcut icon" href="#">
        </head>
        <body>
            <div class="char_header_anim">
                <div class="header_animation">
                    <div class="header">
                        Kot Schrödingera
                    </div>
                    <div class="animation">
                        <canvas id="animal_canvas" class="animation" width="600" height="700"></canvas>
                        <canvas id="box_canvas" class="animation" width="600" height="700"></canvas>
                    </div>
                </div>
                
                <div class = "characters">
                    <canvas id="cat_canvas" width="180" height="180">Kot</canvas>
                    <input type="submit" id="cat" value = "kot" class="sub" onclick="animate_cat(); setCatAsDefault();">
                    <canvas id="pig_canvas" width="180" height="180">Świnka</canvas>
                    <input type="submit" id="pig" value = "świnka" class="sub" onclick="animate_pig(); setPigAsDefault();">
                    <canvas id="dog_canvas" width="180" height="180">Pies</canvas>
                    <input type="submit" id="dog" value = "pies" class="sub" onclick="animate_dog(); setDogAsDefault();">
                </div>
                <script src="./drawing/cat.js"></script>
                <script src="./drawing/dog.js"></script>
                <script src="./drawing/pig.js"></script>
                <script src="./drawing/box.js"></script>
            </div>
            <div class="info">
                <div class="login"> <br><br>
                    <?php 
                        if (!$user->_is_logged()){
                            // echo "<input type = \"submit\" id = \"login\" value = \"zaloguj\" class = \"sub\" onclick = \"login()\">";
                            echo "<input type = \"submit\" id = \"login\" value = \"zaloguj\" class = \"sub\" onclick = \"openLoginForm()\">";
                            echo "<input type = \"submit\" id = \"register\" value = \"zarejestruj\" class = \"sub\" onclick = \"openRegisterForm()\"><br>";
                            echo "<input type = \"submit\" id = \"def_animation\" value = \"domyślna animacja\" class = \"sub\" onclick = \"default_animation_offline()\"><br>";
                        }
                        else {
                            echo "<input type = \"button\" id = \"log_out\" value = \"wyloguj\" class = \"sub\" onclick = \"logout()\">";
                            echo "<input type = \"submit\" id = \"def_animation\" value = \"domyślna animacja\" class = \"sub\" onclick = \"default_animation()\"><br>";
                        }
                    ?>
                </div>
                <br><br>
                Kot Schrödingera - eksperyment myślowy, ilustruje paradoks superpozycji kwantowej. Kot zakmnięty w pudełku może jednocześnie może być żywy lub martwy,
                        kiedy nie jest obserwowany, w związku z losowym wydarzeniem subatomowym, które może ale nie musi się wydarzyć.
                <br><br><br>
                <?php 
                    if ($user->_is_logged()){
                        echo "<div class = \"user_info\">";
                        echo "email: <br>";
                        echo $_SESSION['user'];
                        echo "<br>domyslna animacja: <div id = \"animal_name\">";
                        echo $_SESSION['animal'];
                        echo "</div>";
                        echo "</div>";
                    }
                ?>
            </div>
            <div class="form-popup" id="LoginForm">
                <form class="form-container">
                    <h1>logowanie</h1>
                
                    <label><b>email</b><input id = "email1" type="text" placeholder="Wpisz email" name="email" required></label>
                
                    <label><b>hasło</b><input id = "pass1" type="password" placeholder="Wpisz hasło" name="psw" required></label>
                
                    <input id = "log_sub" type="submit" class="btn" value="Zaloguj" onclick="login()">
                    <button type="button" class="btn cancel" onclick="closeLoginForm()">Zamknij</button>
                </form>
            </div>
            <div class="form-popup" id="RegisterForm">
                <form class="form-container">
                <h1>rejestracja</h1>
            
                <label><b>email</b><input id = "email2" type="text" placeholder="Wpisz email" name="email" required></label>
            
                <label><b>hasło</b><input id = "pass2" type="password" placeholder="Wpisz hasło" name="psw" required></label>
                
                <input id = "reg_sub" type="submit" class="btn" value = "Zarejestruj" onclick="register()">
                <button type="button" class="btn cancel" onclick="closeRegisterForm()">Zamknij</button>
                </form>
            </div>
            <div class="responseForm" id="ResponseForm" style="display: none">
                <div id="response"></div><br>
            </div>
        </body>
    </html>



