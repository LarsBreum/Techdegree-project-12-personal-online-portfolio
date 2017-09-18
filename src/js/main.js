//nav script
const navTrigger = document.getElementById('nav-trigger');
const mobileNav = document.querySelector('.mobile-nav');
const wrapper = document.querySelectorAll('.wrapper, header');

navTrigger.addEventListener('click', () => {
	mobileNav.classList.toggle('navOnCanvas');
	navTrigger.classList.toggle('change');
	navTrigger.classList.toggle('navTriggerLeft');
	for (let i = 0; i < wrapper.length; i++) {
		wrapper[i].classList.toggle('moveToLeft');
	}
});

//slick caruosel for skills
$('.skills-carousel').slick({
   dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
		