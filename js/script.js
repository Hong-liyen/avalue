/*global $,document,window */

$(document).ready(function () {
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
	
	var swiper2 = new Swiper('.applications .swiper-container', {
		speed:1000,
		loop: true,
		pagination: {
			el: '.applications .swiper-pagination',
        	clickable: true,
		},
		navigation: {
			nextEl: '.applications .swiper-button-next',
			prevEl: '.applications .swiper-button-prev',
		},
		mousewheel: {
			releaseOnEdges: true,
		},
	});

	$('#ap-slider').bind('DOMMouseScroll mousewheel', function(e){
		if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
			var total = $(".dp_item").length;
			$("#dp-slider .dp_item:last-child").prependTo("#dp-slider").fadeIn();
			$.each($('.dp_item'), function (index, dp_item) {
				$(dp_item).attr('data-position', index + 1);
			});
		}
		else{
			var total = $(".dp_item").length;
			$("#dp-slider .dp_item:first-child").appendTo("#dp-slider").fadeIn();
			$.each($('.dp_item'), function (index, dp_item) {
				$(dp_item).attr('data-position', index + 1);
			});
			
			$('.swiper-button-prev').css('opacity', '1');
		}
	});

	$('#applications').bind('DOMMouseScroll mousewheel', function(e){
		if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
			var total = $("#ap-slider .swiper-slide_pc").length;
			$("#ap-slider .swiper-wrapper .swiper-slide_pc:last-child").prependTo("#ap-slider .swiper-wrapper_pc").fadeIn();
			$.each($('#ap-slider .swiper-slide_pc'), function (index, swiper_slide) {
				$(swiper_slide).attr('data-position', index + 1);
			});
			var total = $("#ap-slider .swiper-slide_mb").length;
			$("#ap-slider .swiper-wrapper .swiper-slide_mb:last-child").prependTo("#ap-slider .swiper-wrapper_mb").fadeIn();
			$.each($('#ap-slider .swiper-slide_mb'), function (index, swiper_slide) {
				$(swiper_slide).attr('data-position', index + 1);
			});
			var total3 = $(".dp_item").length;
			$("#dp-slider .dp_item:last-child").prependTo("#dp-slider").fadeIn();
			$.each($('.dp_item'), function (index, dp_item) {
				$(dp_item).attr('data-position', index + 1);
			});
			
		}
		else{
			var total = $("#ap-slider .swiper-slide_pc").length;
			$("#ap-slider .swiper-wrapper .swiper-slide_pc:first-child").appendTo("#ap-slider .swiper-wrapper_pc").fadeIn();
			$.each($('#ap-slider .swiper-slide_pc'), function (index, swiper_slide) {
				$(swiper_slide).attr('data-position', index + 1);
			});	
			var total2 = $(".dp_item").length;
			$("#dp-slider .dp_item:first-child").appendTo("#dp-slider").fadeIn();
			$.each($('.dp_item'), function (index, dp_item) {
				$(dp_item).attr('data-position', index + 1);
			});
			var total3 = $("#ap-slider .swiper-slide_mb").length;
			$("#ap-slider .swiper-wrapper .swiper-slide_mb:first-child").appendTo("#ap-slider .swiper-wrapper_mb").fadeIn();
			$.each($('#ap-slider .swiper-slide_mb'), function (index, swiper_slide) {
				$(swiper_slide).attr('data-position', index + 1);
			});	
			$('.swiper-button-prev').css('opacity', '1');
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
		$('.swiper-button-prev').css('opacity', '1');
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
});
