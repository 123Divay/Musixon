<?php
session_start();
include('db_connect.php');
$msg = false;
if (isset($_POST['user_name'])) {
    $user_name = $_POST['user_name'];
    $user_password = $_POST['user_password'];
    $query = "select * from user where user = '".$user_name."' AND password = '".$user_password."' limit 1";
    $result = mysqli_query($con, $query);
    if (mysqli_num_rows($result )== 1) {
        header('Location: WELCOME.php');
    }
    else {
        $msg = "INCORRECT PASSWORD";
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <title>Music Website Login</title>
</head>
<body>
    <header>
     <div class="left_bx1">
        <div class="content">
            <form  method="post">
                <h3>LOGIN</h3>
                <div class="card">
                    <label for="name">NAME</label>
                    <input type="text" name="user_name" placeholder="ENTER YOUR USERNAME. . ."required>
                </div>
                <div class="card">
                    <label for="password">PASSWORD</label>
                    <input type="password" name="user_password" placeholder="ENTER YOUR USERPASSWORD. . ."required>
                </div>
                <input type="submit" value="LOGIN" class="submit">
                <div class="check">
                <input type="checkbox" name="" id=""><span>Remember Me</span>
                </div>
                <p>Dont have a account yet! <a href="signup.php">Sign Up </a></p>
            </form>
        </div>
     </div>
     <div class="right_bx1">
        <img src="kheechmeriphoto.jpg" alt="">
       <!-- <h3>Wrong Password</h3>-->
        <?php
        echo ('<h3>'.$msg.'</h3>');
        ?>
     </div>
    </header>

</body>
</html>