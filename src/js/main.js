//nav script
const navTrigger = document.getElementById('nav-trigger');
const nav = document.querySelector('.navigation');
const main = document.querySelectorAll('main, footer');

navTrigger.addEventListener('click', () => {
	nav.classList.toggle('navOnCanvas');
	navTrigger.classList.toggle('change');
	navTrigger.classList.toggle('navTriggerLeft');
});