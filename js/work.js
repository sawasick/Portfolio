//------slick-----
if (window.innerWidth <= 959) {
	//スマホ,タブレット表示
	$('.detail_img-slide').slick({
		dots: true,
		variableWidth: true,
		waitForAnimate: false,
		arrows: false,
	});
} else {
	//PC表示
	$('.detail_img-slide').slick({
		dots: true,
		variableWidth: true,
		waitForAnimate: false,
		prevArrow:
			"<img src='../image/modal/l.png' class='slide-arrow prev-arrow'>",
		nextArrow:
			"<img src='../image/modal/r.png' class='slide-arrow next-arrow'>",
	});
}

// ｢Pile｣の時のみ、スライド画像のサイズを
// PC→縦710px,横448px
// SP→縦300px,横185px
// に変更する
if (document.URL.match('Pile')) {
	console.log(window.innerWidth);
	if (window.innerWidth < 480) {
		console.log('SPOK');
		//SP表示
		$('.detail_img-slide').css({ height: '484px', width: '300px' });
		$('.detail_img-slide_image').css({ height: '484px', width: '300px' });
	} else {
		console.log('PCOK');
		//PC,TAB表示
		$('.detail_img-slide').css({ height: '710px', width: '448px' });
		$('.detail_img-slide_image').css({ height: '710px', width: '448px' });
		$('.slide-arrow').css('top', 'calc((710px - 284px) / 2)');
	}
}
