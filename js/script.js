/*global $,document,window */

$(document).ready(function () {

	$('.applications').bind('DOMMouseScroll mousewheel', function(e){
		if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
			var total = $(".dp_item").length;
			$("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
			$.each($('.dp_item'), function (index, dp_item) {
				$(dp_item).attr('data-position', index + 1);
			});
			var total2 = $(".swiper-slide_mb").length;
			$(".applications .swiper-wrapper_pc .swiper-slide_mb:last-child").hide().prependTo(".swiper-wrapper_mb").fadeIn();
			$.each($('.swiper-slide_mb'), function (index, swiper_slide) {
				$(swiper_slide).attr('data-title', index + 1);
			});		
		}
		else{
			var total = $(".dp_item").length;
			$("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
			$.each($('.dp_item'), function (index, dp_item) {
				$(dp_item).attr('data-position', index + 1);
			});
			
			var total2 = $(".swiper-slide_mb").length;
			$(".applications .swiper-wrapper_mb .swiper-slide_mb:first-child").hide().appendTo(".swiper-wrapper_mb").fadeIn();
			$.each($('.swiper-slide_mb'), function (index, swiper_slide) {
				$(swiper_slide).attr('data-title', index + 1);
			});	
		}
	});

	$('#dp-slider').bind('DOMMouseScroll mousewheel', function(e){
		if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
			var total = $(".swiper-slide_pc").length;
			$(".applications .swiper-wrapper_pc .swiper-slide_pc:last-child").hide().prependTo(".swiper-wrapper_pc").fadeIn();
			$.each($('.swiper-slide_pc'), function (index, swiper_slide) {
				$(swiper_slide).attr('data-item', index + 1);
			});	

			var total2 = $(".swiper-slide_mb").length;
			$(".applications .swiper-wrapper_pc .swiper-slide_mb:last-child").hide().prependTo(".swiper-wrapper_mb").fadeIn();
			$.each($('.swiper-slide_mb'), function (index, swiper_slide) {
				$(swiper_slide).attr('data-title', index + 1);
			});		
		}
		else{
			var total = $(".swiper-slide_pc").length;
			$(".applications .swiper-wrapper_pc .swiper-slide_pc:first-child").hide().appendTo(".swiper-wrapper_pc").fadeIn();
			$.each($('.swiper-slide_pc'), function (index, swiper_slide) {
				$(swiper_slide).attr('data-item', index + 1);
			});	

			var total2 = $(".swiper-slide_mb").length;
			$(".applications .swiper-wrapper_mb .swiper-slide_mb:first-child").hide().appendTo(".swiper-wrapper_mb").fadeIn();
			$.each($('.swiper-slide_mb'), function (index, swiper_slide) {
				$(swiper_slide).attr('data-title', index + 1);
			});	
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


	$(".swiper-button-next").click(function(){
		var total = $(".dp_item").length;
		$("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
		$.each($('.dp_item'), function (index, dp_item) {
			$(dp_item).attr('data-position', index + 1);
		});
	});

	$(".swiper-button-prev").click(function(){
		var total = $(".dp_item").length;
		$("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
		$.each($('.dp_item'), function (index, dp_item) {
			$(dp_item).attr('data-position', index + 1);
		});
	});

	$("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
		var get_slide = $(this).attr('data-class');
		$("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
		$.each($('.dp_item'), function (index, dp_item) {
			$(dp_item).attr('data-position', index + 1);
		});
	});

	var swiper = new Swiper('.banner .swiper-container, .features .swiper-container, .contactus .swiper-container', {
		speed:3500,
		loop: true,
		autoplay: {
			delay: 0,
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
		},
	});

	var swiper = new Swiper('.applications .swiper-container', {
		speed:3500,
		loop: true,
		autoplay: false,
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
		},
	});
});
