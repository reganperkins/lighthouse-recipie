$(document).ready(function() {
	$('button').click(function() {
		$('img').toggle(1000);
		$('#hide').toggle(1000);
	});
	
	$('.list').click(function(){
		$(this).toggleClass('strike');
	});
});

