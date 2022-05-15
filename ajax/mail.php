<?php




/*получаем значения полей из формы*/
$name = $_POST['name'];
$phone = $_POST['phone'];
$topic = $_POST['topic'];
$text = $POST['text'];
$token = "5351529022:AAFqLNKRVl7mM_QUcNljVqc5KYrlHufIc2A";
/*идентификатор группы*/
$chat_id = "-691580402";
$arr = array(
	'Имя пользователя:' => $name,
	'Телефон:' => $phone,
	'Выбор' => $topic,
  'Сообщение' => $text,

);

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r")

/*функция для создания запроса на сервер Telegram */
function parser($url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    if($result == false){     
      echo "Ошибка отправки запроса: " . curl_error($curl);
      return false;
    }
    else{
      return true;
    }
}

/*собираем сообщение*/
$message .= "Новое сообщение из формы";
$message .= "Имя: ".$name;
$message .= "Телефон:".$phone;
$message .= "Email:".$email;

/*токен который выдаётся при регистрации бота */

/*делаем запрос и отправляем сообщение*/
?>