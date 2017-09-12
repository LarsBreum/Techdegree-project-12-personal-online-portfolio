const navTrigger = document.getElementById('nav-trigger');
const nav = document.querySelector('.navigation');
const main = document.querySelector('main');

navTrigger.addEventListener('click', () => {
	nav.classList.toggle('navOnCanvas');
	main.classList.toggle('mainOffCanvas');
});