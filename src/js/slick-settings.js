

$(document).ready( () => {
	$('.skills-carousel').slick({
		slidesToShow: 3,
		arrows: true,
		lazyload: 'ondemand',
		autoplay: true,
  	autoplaySpeed: 2000,
  	centerMode: true,
  	variableWidth: true,
  	responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
      		slidesToScroll: 1,
      		centerMode: false,
      		arrows: false
				}
  		}
  	]
	});//end slick function
});//end document ready

