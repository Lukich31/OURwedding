$(document).ready(function() {
	

	//sticky-nav
	var waypoint = new Waypoint({
	  element: document.getElementById('time'),
	  handler: function(direction) {
	    if(direction == "down") {
	    	$("nav").attr("id", "sticky-nav");
	    } else {
	    	$("nav").removeAttr("id");
	    }
	  },
	   offset: 60 
	});

	//buttons and nav links click
	$(".button-order").click(function() {
		$("html, body").animate({scrollTop: $("#contact-form-section").offset().top}, 1000);
	});

	$(".button-more").click(function() {
		$("html, body").animate({scrollTop: $("#restaurant-description").offset().top}, 1000);
	});

	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	//animation
	var waypoint = new Waypoint({
	  element: document.getElementById('restaurant-description'),
	  handler: function(direction) {
	    $(".anim1").addClass("animated fadeIn");
	  },
	   offset: 60 
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('cities-section'),
	  handler: function(direction) {
	    $(".anim2").addClass("animated fadeInRight");
	  },
	   offset: 60 
	});

	//var waypoint = new Waypoint({
	  //element: document.getElementById('how-to-order-section'),
	 // handler: function(direction) {
	  //  $(".anim3").addClass("animated fadeInUp");
	//  },
	//   offset: 60 
	//});

	var waypoint = new Waypoint({
	  element: document.getElementById('header-text'),
	  handler: function(direction) {
	    if(direction == "up") {
	    	$(".anim4").addClass("animated shake");
	    } else {
	    	$(".anim4").removeClass("animated shake");
	    }
	  },
	   offset: 60 
	});

	// mobile nav
	$(".mobile-nav-icon").click(function() {

		$("#main-nav").slideToggle(300);

		var icon = $(".mobile-nav-icon i");

		if(icon.hasClass("ion-md-menu")) {
			icon.removeClass("ion-md-menu");
			icon.addClass("ion-md-close");
			$("nav").animate({height: "300px"}, 300);
		} else {
			icon.removeClass("ion-md-close");
			icon.addClass("ion-md-menu");
			$("nav").animate({height: "70px"}, 300);
		}

		
		
	});

//time
var clock;
  $(document).ready(function() {
   var clock;
   clock = $('.clock').FlipClock({
    clockFace: 'DailyCounter',
    autoStart: false,
    callbacks: {
      stop: function() {
      $('.message').html('Мероприятие уже началось!')
      }
     }
    });

   var dt = "June 16 2022 16:00:00";
   var first = new Date(dt);
   var last = Date.now();
   var remaining = first - last;
   remaining /=1000;

    clock.setTime(220880); //Устанавливаем нужное время в секундах
    clock.setCountdown(true); //Устанавливаем отсчет времени назад
    clock.start(); //Запускаем отсчет
  });
//форма обратной связи
jQuery(function() {
      $('#contact-form-section').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
          url: 'lukichevavnnr@mail.ru',
          type: 'POST',
          cache: false,
          data: $(e.target).serialize()
        }).done(function() {
          alert('Done.');
        }).fail(function() {
          alert('Something went wrong.');
        });
      });
      });
})






