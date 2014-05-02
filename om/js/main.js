$(window).load(function(){
	show();
	bg_color_tween();
	scrollpage();
});

$(document).ready(function() {
	$('.osx-link').click(function() {
		$('.block.osx').slideDown('fast');
			return false;
		});
	$('.om-link').click(function() {
		$('.block.om').slideDown('fast');
			return false;
	});

		$('.block').click(function() {
			$('.block').slideUp('fast');
			return false;
	});

});


function show() {
    $('#loading').delay(500).fadeOut("slow");
}


var colors = Array('#ffaa37', '#bacd4a', '#ba5039', '#7086cd');
var color_index = 0;
var interval = 13500; //How long the color blend transition lasts. (in milliseconds, 1000 = 1 second)
 
function bg_color_tween() {
	$('.bg').animate({ backgroundColor: colors[color_index] }, interval, 'linear', function() {
		if(color_index == colors.length) { color_index = 0; } //If we are at the end of the colors array go back to the beginning.
		else { color_index++; } //Lets move to the next color in the colors array.s
		
		bg_color_tween();
	});
}


