function iRell(rb, rc) {
	var btnLeft = $('#' + rb + ' .btn-left');
	var btnRight = $('#' + rb + ' .btn-right');
	var rBox = $('#' + rc).children('div');
	var rBoxItem = rBox.children('.item');
	var step = rBoxItem.width();
	var flag = 1;
	rBox.css({
		'width': rBoxItem.length * step,
		'position': 'absolute',
		'left': 0
	});
	
	btnLeft.click(function(e) {
		e.preventDefault();
		if (flag > 1) {
			rBox.animate({
				left: '+=' + step
			}, 'fast');
			flag = flag - 1;
		};
	});
	btnRight.click(function(e) {
		e.preventDefault();
		if (flag < rBoxItem.length) {
			rBox.animate({
				left: '-=' + step
			}, 'fast');
			flag = flag + 1;
		};
	});
};