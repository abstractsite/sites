$(window).load(function(){
	show();
	bg_color_tween();
	scrollpage();
});

$(document).ready(function() {
	$('.osx-link').click(function() {
		$('.block.osx').slideDown('fast');
			//return false;
		});
	$('.om-link').click(function() {

		$('.block.om').slideDown('fast');
		appendVideo();
			//return false;
	});

	$('.block').click(function() {
		$('.block').slideUp('fast');
		//return false;
	});

	$('.block.video').click(function() {
		removeVideo();
		//return false;
	});

});


function show() {
    $('#loading').delay(500).fadeOut("slow");
}

function appendVideo(){
  $('.video .centered').append("<iframe width='853' height='480' src='//www.youtube.com/embed/oPFgVe0b-us?rel=0&autoplay=1' frameborder='0' allowfullscreen></iframe>");
}

function removeVideo(){
  $('.video .centered iframe').remove();
}


var colors = Array('#ff8173', '#da773f', '#5ddac8', '#43c1c4');
var color_index = 0;
var interval = 13500; //How long the color blend transition lasts. (in milliseconds, 1000 = 1 second)
 
function bg_color_tween() {
	$('.bg').animate({ backgroundColor: colors[color_index] }, interval, 'linear', function() {
		if(color_index == colors.length) { color_index = 0; } //If we are at the end of the colors array go back to the beginning.
		else { color_index++; } //Lets move to the next color in the colors array.s
		
		bg_color_tween();
	});
}


function scrollpage() {

	$(".learn-more a").click(function(event){
		//prevent the default action for the click event
		//event.preventDefault();
 
		//get the full url - like mysitecom/index.htm#home
		var full_url = this.href;
 
		//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
		var parts = full_url.split("#");
		var trgt = parts[1];
 
		//get the top offset of the target anchor
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
 
		//goto that anchor by setting the body scroll top to anchor top
		$('html, body').animate({scrollTop:target_top}, 2000, 'easeOutQuad');
	});

}

$(window).hashchange(function() {
    // put any other hashchange magic you might want to do here
    _gaq.push(['_trackPageview', location.pathname + location.search + location.hash]);
});