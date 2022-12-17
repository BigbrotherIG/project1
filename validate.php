<?php
    if(isset($_POST['submitform'])){

        $name = $_POST['fullname'];
        $email = $_POST['email'];
        $message = $_POST['messsage'];

        $mailTo = "godwinunini@gmail.com";
        $subject = "Mail from your from a client." .$name;

        // email message body
        $htmlContent = '<h2> Email receive from '.$name.' </h2>
        <p> <b>Client Name: </b> '.$name .'</p>
        <p> <b>Email: </b> '.$email.'</p>
        <p> <b>Message: </b> '.$message.'</p>';

        $headers = "From: " .$name . "<". $email . ">";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        $result = mail($mailTo, $subject, $htmlContent);

        if($result) {
            $success = "Your mail was send successufully";
        }else {
            $failed = "Mail was not sent!";
        }

    }
?>