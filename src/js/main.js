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

//Sticky nav for tablet and desktop
const nav = document.querySelector('header .navigation');
const mediaQuery = window.matchMedia( "(min-width: 768px)" );
if (mediaQuery.matches) {
	getScrollPos();
} 
function getScrollPos() {
		let scrollPos = window.addEventListener('scroll', (e) => {
			scrollPos = window.scrollY;
			console.log(scrollPos);
			makeNavSticky(scrollPos);
	});
}
function makeNavSticky(scrollPos) {
	if (scrollPos >= 80) {
		nav.classList.add('sticky-nav');
	} else {
		nav.classList.remove('sticky-nav');
	}
}