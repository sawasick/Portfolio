//------slick-----
if (window.innerWidth <= 959) {
	//スマホ,タブレット表示
	$(".detail_img-slide").slick({
		dots: true,
		variableWidth: true,
		waitForAnimate: false,
		arrows: false,
	});
} else {
	//PC表示
	$(".detail_img-slide").slick({
		dots: true,
		variableWidth: true,
		waitForAnimate: false,
		prevArrow:
			"<img src='../image/modal/l.png' class='slide-arrow prev-arrow'>",
		nextArrow:
			"<img src='../image/modal/r.png' class='slide-arrow next-arrow'>",
	});
}
