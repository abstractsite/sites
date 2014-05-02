
$('#yourElement').addClass('animated bounceOutLeft');

// $( ".section" ).hover(function() {
// 	$(this).find("h3").toggleClass('animated bounceInLeft');
// });


$(".logo").fadeIn("400", function () {
    $(".section").delay(800).each(function(index) {
    	$(this).delay(400*index).animate({ opacity: 1 });
	});
});

