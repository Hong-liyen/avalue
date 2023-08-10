/*global $,document,window */

$(document).ready(function () {
	var swiper = new Swiper('.banner .swiper-container, .features .swiper-container, .contactus .swiper-container', {
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
	
	var swiper2 = new Swiper('.applications .swiper-container', {
		speed:350,
		loop: true,
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
		moveStartThreshold: false
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

	$(".swiper-button-next").click(function(){
		$('.swiper-button-prev').css('opacity', '1');
		$("#dp-slider .dp_item:first-child").appendTo("#dp-slider");
		$.each($('.dp_item'), function (index, dp_item) {
			$(dp_item).attr('data-position', index + 1);
		});
	});

	$(".swiper-button-prev").click(function(){
		$("#dp-slider .dp_item:last-child").prependTo("#dp-slider");
		$.each($('.dp_item'), function (index, dp_item) {
			$(dp_item).attr('data-position', index + 1);
		});
	});
});
