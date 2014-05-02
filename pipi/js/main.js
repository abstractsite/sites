// ---------- Calling all functions ---------- //

$(document).ready(function(){
  
  $(".why-block .readmore").click(function(){
    $(".why-block").toggleClass("open");
    $(this).html($(this).html() == "Read More" ? "Hide" : "Read More");
  });


  $(".faq-block .readmore").click(function(){
    $(".faq-block .faq-more").slideToggle(function(){
        $('.fader').toggleClass("fader-clear");
        $(".faq-block").toggleClass("open");
    });
    $(this).html($(this).html() == "Read More" ? "Hide" : "Read More");
  });


  	$('.plansoverlay').click(function() {
		$('.block').slideDown('fast');
			//return false;
		});
	
	$('.block').click(function() {
		$('.block').slideUp('fast');
		//return false;
	});

});



jQuery(document).ready(function($) {

  $('.video').fitVids();

});

// ---------- Animating ScrtollTop ---------- //

jQuery(document).ready(function($) {

 $('.in-page-links').click(function(event){

    // event.preventDefault();

    // get the caller's href
    var full_url = $(this)[0].href;

    // split it with #
    var parts = full_url.split("#");

    // get the part after #
    var target = parts[1];

    // get the offset object of the target element
    var target_offset = $("#"+target).offset();

    // get the top in offset the offset
    var target_top = target_offset.top;

    // var to avoid calling the animate twice
    var avoidAnimateTwice = false;

    // now animate!
    $("html, body").animate(
        { scrollTop: target_top }, 1000, 'easeOutQuad', 
        { complete : function(){
                if(!avoidAnimateTwice){
                    avoidAnimateTwice = true;
                }
            }
        }
    );

  }); // .click

}); // jQuery(document).ready



$(window).hashchange(function() {
    // put any other hashchange magic you might want to do here
    _gaq.push(['_trackPageview', location.pathname + location.search + location.hash]);
});
