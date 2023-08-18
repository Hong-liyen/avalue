/*global $,document,window */



$(document).ready(function () {

	var swiper = new Swiper('.features .swiper-container, .contactus .swiper-container', {

		speed:1000,

		loop: true,

		autoplay: {

			delay: 5000,

		},

		pagination: {

			el: '.swiper-pagination',

        	clickable: true,

		},

		navigation: {

			nextEl: '.swiper-button-next',

			prevEl: '.swiper-button-prev',

		},

		mousewheel: {

			releaseOnEdges: true,

		}

	});

	

	var swiper2 = new Swiper('.banner .swiper-container', {

		speed:1000,

		loop: true,

		autoplay: {

			delay: 5000,

		},

		pagination: {

			el: '.swiper-pagination',

        	clickable: true,

		},

		navigation: {

			nextEl: '.swiper-button-next',

			prevEl: '.swiper-button-prev',

		}

	});

	var swiper3 = new Swiper('.applications #title-slider .swiper-container', {
		speed: 350,
		loop: true,
		touchRatio: 0,
		simulateTouch: false,
		followFinger: false,
		moveStartThreshold: false
	});
	var swiper4 = new Swiper('.applications #ap-slider .swiper-container', {
		speed: 350,
		loop: true,
		autoplay: {
			delay: 5000,
    	disableOnInteraction: false,
			pauseOnMouseEnter: true
		},
		pagination: {
			el: '.applications .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.applications .swiper-button-next',
			prevEl: '.applications .swiper-button-prev',
		},
		touchRatio: 0,
		simulateTouch: false,
		followFinger: false,
		moveStartThreshold: false,
		on: {
			slideChange: function () {
				var oldIdx = $('#dp-slider .dp_item:first-child').attr('data-class');
				var total = $("#dp-slider .dp_item").length;
				var idx = this.activeIndex;
				swiper3.slideTo(idx, 350, false);
				if (idx > oldIdx) { // next
					for (var i = 0; i < Math.abs(idx - oldIdx); i++) {
						$("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
					}
					$.each($('.dp_item'), function (index, dp_item) {
						$(dp_item).attr('data-position', index + 1);
					});
				} else if(idx == (oldIdx - 1)){ //prev
					$("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
					$.each($('.dp_item'), function (index, dp_item) {
						$(dp_item).attr('data-position', index + 1);
					});
				} else if (idx != oldIdx) { //click img
					for (var i = 0; i < Math.abs(total - oldIdx + idx); i++) {
						$("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
					}
					$.each($('.dp_item'), function (index, dp_item) {
						$(dp_item).attr('data-position', index + 1);
					});
				}
			}
		}
	});


	$(window).scroll(function(){

		var scrollTop = $(window).scrollTop();

		

		if(scrollTop>50){

			$('body').addClass('scroll');

		}else{

			$('body').removeClass('scroll');

		}

		if(scrollTop>250){

			$('.goTop').show();

			$('.icon-scroll').hide();

		}else{

			$('.goTop').hide();

			$('.icon-scroll').show();

		}

	});



	$(".goTop").click(function(){

		$("html,body").animate({scrollTop:0},600);

		return false;

	});



	$('a.more').click(function(e) {

		e.preventDefault();

		if( $(this).parent().find('.contain.active').length ) {

			$(this).html('...more');

			$(this).parent().find('.contain').removeClass('active');

		} else {

			$(this).css("display", 'none');

			$(this).parent().find('.contain').addClass('active');

		}

	});

	$("body").on("click", "#dp-slider .dp_item", function () {
		var idx = $(this).attr('data-class');
		swiper4.slideTo(idx, 350, false);
	});	
});

