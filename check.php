<?php
    if (!empty($_POST["password"]))
    {
        $db = new PDO("mysql:host=localhost;dbname=portfolio", "root", "root");

        $input_password = hash("sha512", $_POST["password"]);
        $query = $db -> prepare("SELECT password FROM admin WHERE password = ?");
        $query -> execute([$input_password]);
        $password_check = $query -> fetch();

        if ($password_check)
        {
            header("Location: index.php");
            exit;
        }
    }
?>