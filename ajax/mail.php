<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$text = $_POST['text'];


	$subject = "=?utf-8?B?".base64_encode("Сообщение сайта")."?=";
	$headers = "Form: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

	$success name("lukichevavnnr@mail.ru", $subject, $text, $headers);
	echo $success
?>