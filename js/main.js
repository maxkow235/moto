$(document).ready(function() {
	darkenNav()


	$('#date-toggle').magnificPopup({
		type: 'inline',
		midClick: true,

		closeBtnInside: false
	})
	$('#pizda').magnificPopup({
		type:'inline',
		midClick:true

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



	$('.slick-teachers, .slick-moto, .slick-courses, .slick-testimonials').slick({
		nextArrow: '<button class="arrow-right"></button>',
		prevArrow: '<button class="arrow-left"></button>',

	})
	// the containers for all your galleries
	if ($('.media-gallery .gallery') !== undefined) {
		$('.media-gallery .gallery').magnificPopup({
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
				type: 'inline'
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