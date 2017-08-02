$(function() {

	// var hf = function() {
	// 	var h_header = $('header').height();
	// 	var h_footer = $('footer').height();
	// 	$('.content').css({
	// 		'paddingTop': h_header,
	// 		'paddingBottom': h_footer
	// 	});
	// }

	// $(window).bind('load resize', hf)

	$('.nav-mobile-menu').click(function() {
		$(this).toggleClass('is-open')
		if ($('.nav-mobile-menu').hasClass('is-open')) {
					$('.main-menu').css('top', '0')
        }
    else { 
			$('.main-menu').css('top', '-1000px');
  	} 
	});

	$( "#slider" ).slider({

		min: 1,
		max: 100,
		value: 46,
		range: "min",
		animate: true

	});

	$('.header .main-menu ul li a').click(function() {

		$('.main-menu').css('top', '-1000px')
		$('.nav-mobile-menu').removeClass('is-open')

	});

});


$(window).scroll(function() {
	
	var wScroll = $(this).scrollTop();

	if (wScroll > $("section#form").offset().top) {

		$(".header").addClass('fixed animated fadeInDown');

	} else {
		$(".header").removeClass('fixed animated fadeInDown');
	};


});