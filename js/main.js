
$(document).ready(function(){ 
	 //$('#header .b').hide();
  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
	  $('#header .a').fadeOut(0);
	  $('#header .b').fadeIn(0);
    } else {
      $('#header').removeClass('header-scrolled');
	   $('#header .b').fadeOut(0);
	  $('#header .a').fadeIn(0);
    }
  })

 });
