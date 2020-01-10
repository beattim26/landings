  /* timer */

  now = new Date();

  var time = (24-now.getHours())*1200;

  $(".timer").attr("data-timer", time);
  $(".timer").TimeCircles({
	  "animation": "smooth",
	  "bg_width": 0.001,
	  "fg_width": 0.02,
	  "circle_bg_color": "#969E31",
	  "time": {
		  "Days": {
			  "show": false
		  },
		  "Hours": {
			  "text": "ore",
			  "color": "#969E31",
			  "show": true
		  },
		  "Minutes": {
			  "text": "minuti",
			  "color": "#969E31",
			  "show": true
		  },
		  "Seconds": {
			  "text": "seconde",
			  "color": "#969E31",
			  "show": true
		  }
	  }
  });


$('a[href^="#"]').click(function (){
	var elementClick = $(this).attr("href");
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
	return false;
});

var reviews = new Swiper(".reviews__slider", {
	autoHeight: true,
	pagination: {
	  el: ".reviews__pag",
	  clickable: true
	},
	spaceBetween: 40
  });