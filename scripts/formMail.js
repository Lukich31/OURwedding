//форма обратной связи
$("#sendMail").on("click", function(){
	var name = $("name").val().trim();//trim удаляет лишние пробелы
	var email = $("email").val().trim();
	var text = $("text").val().trim();


	if(name == "") {
		$("errorMess").text("Введите фамилию и имя");
		return false;

	} else if(name == "") {
		$("errorMess").text("Введите фамилию и имя");
		return false;
	} else if(email == "") {
		$("errorMess").text("Введите email или телефон");
		return false;
	} else if(text == "") {
		$("errorMess").text("Напишите текст письма");
		return false;
	}

	$("#errorMess").text("");

	$.ajax({
		url: 'ajax/mail.php',
		type: 'POST',
		cache: false,
		data: {'name': name, 'email': email, 'text': text},
		dataType: 'html',
		beforeSend: function() {
			$("#sendMail").prop("disabled", true);
		},
		success: function(data) {
			if (!data)//! обозначет false
			alert("Есть ошибки, сообщение не отправлено");

				else 
				$("#contact-form-section").trigger("reset");

			$("#sendMail").prop("disabled", false);
		}
	});


});