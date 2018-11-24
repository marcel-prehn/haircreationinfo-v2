<?php
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];
    $from = "From: $name<$email>\r\nReturn-path: $email";
    $to = "hair.creation67a@gmail.com";

    mail($to, "Nachricht von Hair-Creation.info: " . $subject, $message, $from);

    header("Location: index.html");
?>