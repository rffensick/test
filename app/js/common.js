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
					$('.main-menu').slideDown('slow')
					$('.nav-mobile-menu').css('transform', 'translate(0px, 200px)')
        }
    else { 
			$('.main-menu').slideUp('slow');
			$('.nav-mobile-menu').css('transform', 'translate(0px, 0px)')
  	} 
	});

});
