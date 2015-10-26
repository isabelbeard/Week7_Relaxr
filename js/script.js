$(document).ready(function() {

event.preventDefault();
// When you click on read more asidetext-expanded appears and readmore turns to read less.

// I Couldn't get the instructions in the homework to work so I found another way to do it instead using a slideToggle function and telling it to say certain things at certain times
$("#asidetext-expanded").hide();
$("#articletext-1-expanded").hide();
$("#articletext-2-expanded").hide();

  // FUNCTIONS

	$("#learnmore-1").click(function(){
    $("#asidetext-expanded").slideToggle();
  });

	$('.learn-more').click(function(){
	    var $this = $(this);
	    $this.toggleClass('learn-more');
	    if($this.hasClass('learn-more')){
	        $this.text('Learn More');
	    } else {
	        $this.text('Learn Less');
	    }
	});




// This readmore isn't working but the next one is and I can't figure out why. Nothing comes up when I inspect element
	$("#readmore-1").click(function(){
		$("#articletext-1-expanded").slideToggle();
	});

	$('#readmore-1').click(function(){
			var $this = $(this);
			$this.toggleClass('#readmore-1');
			if($this.hasClass('#readmore-1')){
					$this.text('Read More');
			} else {
					$this.text('Read Less');
			}
	});





	// Not sure why the readmore and read less isn't working properly even if it works for the aside

	$("#readmore-2").click(function(){
		$("#articletext-2-expanded").slideToggle();
	});

	$('#readmore-2').click(function(){
	    var $this = $(this);
	    $this.toggleClass('#readmore-2');
	    if($this.hasClass('#readmore-2')){
	        $this.text('Read More');
	    } else {
	        $this.text('Read Less');
	    }
	});





		//menu reveal


	// FUNCTIONS
	function mainNavShow(){
	    event.preventDefault();
	    $('.main-nav').slideToggle();

	// EVENT BINDING
	}

	$(".hamburgerIcon").on("click", mainNavShow);




});
