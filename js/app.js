$(document).ready(function(){

	// Smooth scrolling
	$(".back-to-top a, #main_nav a").click(function(event){
		event.preventDefault();
		var id = $(this).attr("href");
		var divPosition = $(id).offset().top-100;
		$("html, body").animate({ scrollTop: divPosition });
	});

	//Add class for navigation on click
	$("#main_nav a").on("click", function(e) {
		$('#main_nav a').removeClass('active');
	    $(this).toggleClass("active");
	});

	//Sticky header
	var  mn = $("header");
    mns = "scrolled";
    hdr = $('header').height();

	$(window).scroll(function() {
		if( $(this).scrollTop() > hdr ) {
		    mn.addClass(mns);
		    $('#main_nav').addClass(mns);
		    $('.logo').addClass(mns);
		} else {
		    mn.removeClass(mns);
		    $('#main_nav').removeClass(mns);
		    $('.logo').removeClass(mns);
		}
	});

	//Lightbox
	var $overlay = $('<div id="overlay"></div>');
	var $image = $("<img>");
	var $caption = $("<p></p>");

	$overlay.append($image);
	$overlay.append($caption);
	$("body").append($overlay);

	$("#about a, #portfolio a, .overlay_img a").click(function(event) {
	    event.preventDefault();
	    var imageLocation = $(this).attr("href");
	    $image.attr("src", imageLocation);
	  
		$overlay.css({ 'visibility':'visible', 'opacity':'1' });
	  
	    var captionText = $(this).children("img").attr("alt");
	    $caption.text(captionText);
	});
	  
	$overlay.click(function() {
	    $overlay.removeAttr('style');
	    $caption.html("");
	});

});