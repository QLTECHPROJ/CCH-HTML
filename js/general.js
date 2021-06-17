$(document).ready(function() {
/*banner slider*/

/*************** Sticky Header *****************/
   $(window).scroll(function()
{
	if ($(window).scrollTop() > 100)
	{
		$('header').addClass('sticky');
	}
	else
	{
		$('header').removeClass('sticky');
	}
});

/********************* mobile-accordion ************************/
  
  /************* Scroll Top *************/
	$(window).scroll(function ()
	{
		if ($(window).scrollTop() > 20)
		{
			$('.scroll-top').addClass('visible');
			$('header').addClass('sticky');
		} else {
			$('.scroll-top').removeClass('visible');
			$('header').removeClass('sticky');
		}
	});
	
});

