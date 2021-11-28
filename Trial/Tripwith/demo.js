window.onload = function() {

	$('body > input').eq(0).on('keyup', function() {
		let inputVal = $(this).val(); // val() = value
		let textarea = $('body > textarea').eq(0);
		textarea.html(inputVal);
	});

};