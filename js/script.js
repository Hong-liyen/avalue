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
		preventLinksPropagation: false,
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
