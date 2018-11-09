$(document).ready(function() {
	darkenNav()

	$('.navbar-toggler').click(function() {
		darkenNav()
		$('nav.navbar-dark.bg-dark').toggleClass('darken');
		$('body').toggleClass('menu-open');
		$(this).toggleClass('collapsed');
		$($(this).data('target')).toggleClass('show');
	});

	

	$('.slick-teachers, .slick-moto, .slick-courses, .slick-testimonials').slick({
		nextArrow: '<button class="arrow-right"></button>',
		prevArrow: '<button class="arrow-left"></button>',
	
	})



	$(document).scroll(function() {
		darkenNav();
	});
});

function darkenNav() {
	scroll_pos = $(this).scrollTop();
	if (scroll_pos > 10) {
		$('nav.navbar-dark.bg-dark').addClass('scrolled')
		console.log('added')
	} else {
		$('nav.navbar-dark.bg-dark').removeClass('scrolled')
		console.log('removed')
	}
}


