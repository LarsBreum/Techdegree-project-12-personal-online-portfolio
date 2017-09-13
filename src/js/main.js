//nav script
const navTrigger = document.getElementById('nav-trigger');
const nav = document.querySelector('.navigation');
const wrapper = document.querySelectorAll('.wrapper, header');

navTrigger.addEventListener('click', () => {
	nav.classList.toggle('navOnCanvas');
	navTrigger.classList.toggle('change');
	navTrigger.classList.toggle('navTriggerLeft');
	for (let i = 0; i < wrapper.length; i++) {
		wrapper[i].classList.toggle('moveToLeft');
	}
});