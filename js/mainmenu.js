//關於滾動功能
$(window).scroll(() => {
	var windowTop = $(window).scrollTop();
	var mm = window.matchMedia("(min-width: 992px)");
	mm.addListener(resizeWidth);
	resizeWidth(mm);
	function resizeWidth(pMatchMedia){
		if (pMatchMedia.matches) {
			windowTop > 550 ? $('nav').addClass('navshadow') : $('nav').removeClass('navshadow');
			windowTop > 550 ? $('a.scroll').addClass('downmm') : $('a.scroll').removeClass('downmm');
			//windowTop > 550 ? $('.menu_nav').css('top', '0px') : $('.menu_nav').css('top', '0px');
			windowTop > 550 ? $('#toTop').addClass('down') : $('#toTop').removeClass('down');
		}
	}
	var mm2 = window.matchMedia("(max-width: 991px)");
	mm2.addListener(resizeWidth2);
	resizeWidth2(mm2);
	function resizeWidth2(pMatchMedia2){
		if (pMatchMedia2.matches) {
			windowTop > 100 ? $('nav').addClass('navshadow') : $('nav').removeClass('navshadow');
			windowTop > 100 ? $('a.scroll').addClass('downmm') : $('a.scroll').removeClass('downmm');
			//windowTop > 100 ? $('.menu_nav').css('top', '0px') : $('.menu_nav').css('top', '0px');
			windowTop > 100 ? $('#toTop').addClass('down') : $('#toTop').removeClass('down');
		}
	}
});

//點Logo滾動到頂部
$('#logo').on('click', () => {
	$('html,body').animate({
		scrollTop: 0
	}, 1000);
});

//Toggle Menu
$('#menu_toggle').on('click', () => {
	$('#menu_toggle').toggleClass('closemenu');
	$('.menu_nav').toggleClass('showmenu');
	$('#logo').toggleClass('white');
	$('.header_main').toggleClass('showmenu');

	$('.menu_nav').on('click', () => {
		$('#menu_toggle').removeClass('closemenu');
		$('.menu_nav').removeClass('showmenu');
		$('#logo').removeClass('white');
		$('.header_main').removeClass('showmenu');
	});
});