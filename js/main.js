$(document).ready(function() {
	darkenNav()
	//Test MENU Remove on production!!
	initMenu()



	$('#date-toggle').magnificPopup({
		type: 'inline',
		midClick: true,

		closeBtnInside: false
	})
	$('#pizda').magnificPopup({
		type: 'inline',
		midClick: true

	})

	$('#leave-feedback').magnificPopup({
		type: 'inline',
		midClick: true,

		closeBtnInside: false
	})
	$('#course-assign').magnificPopup({
		type: 'inline',
		midClick: true,
		closeBtnInside: false
	})

	$('#rating_table .card').click(function() {
		$(this).toggleClass('open')
	})

	$('input.time_input').inputmask("99:99");

	$('#nameedit').magnificPopup({
		type: 'inline',
		midClick: true,
		closeBtnInside: false
	});

	$('#timeedit').magnificPopup({
		type: 'inline',
		midClick: true,
		closeBtnInside: false
	});

	//test popup sumbit REMOVE ON PRODUCTION
	$('#course-popup input[type=submit]').click(function(e) {
		e.preventDefault()
		$('#course-popup').addClass('submitted');
	})

	$('.navbar-toggler').click(function() {
		darkenNav()
		$('nav.navbar-dark.bg-dark').toggleClass('darken');
		$('body').toggleClass('menu-open');
		$(this).toggleClass('collapsed');
		$($(this).data('target')).toggleClass('show');
	});

	$('.prod-card').click(function() {
		$(this).removeClass('blur');
		$(this).toggleClass('selected');

		$(this).each(function() {
			if ($('.prod-card.selected').length > 0) {
				$('#btn-trade').removeClass('d-none');
				$('.prod-card:not(.selected)').addClass('blur')
			} else {
				$('#btn-trade').addClass('d-none');
				$('.prod-card:not(.selected)').removeClass('blur')
			}
		});
	})



	$('.slick-teachers, .slick-moto, .slick-courses, .slick-testimonials ').slick({
		nextArrow: '<button class="arrow-right"></button>',
		prevArrow: '<button class="arrow-left"></button>',

	})
	$('.slick-prof-courses').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.slider-courses .counter').html("<span class='current'>" + i + "</span>" + "<span class='total'>/" + slick.slideCount + "</span>");
	});

	$('.slick-prof-courses').slick({
		nextArrow: '<button class="arrow-right"></button>',
		prevArrow: '<button class="arrow-left"></button>',

	})

	$('.courses-sm-slick').slick({
		nextArrow: '<button class="arrow-right"></button>',
		prevArrow: '<button class="arrow-left"></button>',
		dots: true

	})



	// the containers for all your galleries
	$('.media-gallery .gallery').each(function() {
		if ($(this) !== undefined) {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0, 1]
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

				},
				callbacks: {
					elementParse: function(item) {
						// the class name

						if (item.el[0].className == 'video-link') {
							item.type = 'iframe';
						} else {
							item.type = 'image';
						}
					}
				},
			});
		}
	})

	$('#calendar').fullCalendar({
		firstDay: 1,
		fixedWeekCount: false,
		aspectRatio: 0.9,

		// editable: true,
		// selectable: true,
		events: [


			{
				start: '2018-11-14',
				allDay: true,
				className: 'past'
			}, {
				start: '2018-11-13',
				allDay: true,
				className: 'past'
			}, {
				start: '2018-11-02',
				allDay: true,
				className: 'future'
			}, {
				start: '2018-11-20',
				allDay: true,
				className: 'not_available'
			},


		],
		// loading: function(date) {

		// },
		eventAfterRender: function(event, element, view) {
			var event_date = event.start._i;
			var event_type = event.className[0];
			$('.fc-day-top').filter(function() {
				return $(this).data("date") == event_date
			}).addClass(event_type);
			// $('.fc-day-top').data('date', event_date).
			// console.log($('.fc-day-top').data('date', event_date));
			console.log(event_date);
			// console.log(event_type);
		},
		dayClick: function(date, jsEvent, view) {



			$.magnificPopup.open({

				items: {
					src: '#event_popup',
				},
				type: 'inline',
				closeBtnInside: false
			});



		},
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август',
			'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
		],
		monthNamesShort: ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.',
			'Сент.', 'Окт.', 'Ноя.', 'Дек.'
		],
		dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница",
			"Суббота"
		],
		dayNamesShort: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
		buttonText: {
			today: "Сегодня"
		}
	})


	//init comment counter
	$('#counter').html($('.comment-form textarea').attr('maxlength'))
	$('.comment-form textarea').keyup(function() {
		textCounter(this, 'counter', $(this).attr('maxlength'));
	})

	//range show value
	$(".range-slider__range").on("input change", function() {
		radioVal($(this).val())
	})

	$(document).scroll(function() {
		darkenNav();
	});


	//picker functionality 
	$('#date-toggle').click(function() {
		if (!$('.picker').hasClass('slick-initialized')) {
			$('.picker').slick({
				nextArrow: '<button class="rarr"></button>',
				prevArrow: '<button class="larr"></button>',
				cssEase: 'none',
				draggable: false,
				swipe: false,
				speed: 1,
				responsive: [{
						breakpoint: 1024,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}, {
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}, {
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
				]
			})
		}
	})


});

//Remove on production
function initMenu() {
	var menu = [
		"contacts",
		"course_single",
		"courses",
		"equipment",
		"infografic",
		"instructors",
		"login",
		"motopark",
		"motoservice",
		"mediagallery",
		"news",
		"news_single",
		"notifications",
		"profile_calendar",
		"profile_otheruser",
		"profile_shop",
		"profile_user",
		"rating_table",
		"register",
		"testimonials"
	]
	$("ul.navbar-nav").html("")

	menu.forEach(function(v) {
		var item = "<li class='nav-item'><a class='nav-link' href=" + v + ".html" + ">" + v + " </a> </li>"
		$("ul.navbar-nav").append(item)
	})
}

function radioVal(val) {
	document.querySelector('.input_field.range-slider .value_block .range-slider__value').innerHTML = val;
}

function textCounter(field, field2, maxlimit) {

	var countfield = document.getElementById(field2);
	countfield.innerHTML = maxlimit;
	if (field.value.length > maxlimit) {
		field.value = field.value.substring(0, maxlimit);
		return false;
	} else {
		countfield.innerHTML = maxlimit - field.value.length;
	}
}

function darkenNav() {
	scroll_pos = $(this).scrollTop();
	if (scroll_pos > 10) {
		$('nav.navbar-dark.bg-dark').addClass('scrolled')

	} else {
		$('nav.navbar-dark.bg-dark').removeClass('scrolled')

	}
}