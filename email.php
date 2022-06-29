<?php
    if(!isset($_POST['Send']))
    {
        echo "error; you need to submit the form!";
    }
    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $message = $_POST['message'];

    $name = "Test";
    $email = "test@test.com";
    $message = "Kill me nooooow :)";

    // $from = "banditgamestudio@gmail.com";
    // $to = "banditgamestudio@gmail.com";
    $from = "alemc1299@hotmail.com";
    $to = "alemc1299@hotmail.com";
    $headers = "From: $from \r\n";
    $headers .= "Reply-To: $email \r\n";

    $subject = "NEW WEBSITE MESSAGE";
    $body = "From: $name\n"."Email: $email\n"."\n$message"."";

    $result = mail($to, $subject, $body, $headers);

    if($result){
        echo $result;
        echo "MESSAGE ACCEPTED";
    }
    else {
        echo "ERROR - MESSAGE REJECTED";
    }
   


?>