$(document).ready(function() {
	$('.icon').click(function(e) {
		$(this).toggleClass('active');
		$('.list').toggleClass('active');

		e.preventDefault();
	});
});