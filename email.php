<?php

$name = $_POST["name"];
$mobile = $_POST["mobile"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = 's7.cyber-folks.pl';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 465;

$mail->Username = 'kontakt@cieslaszymon.pl';
$mail->Password = 'Forcabrava324#';

$mail->setFrom($email, $name);
$mail->addAddress('sciesla@versamatic.com.pl', 'Szymon Cieśla');

$mail->Subject = $subject;
$mail->Body = $message;
$mail->send();

echo "email sent";
?>