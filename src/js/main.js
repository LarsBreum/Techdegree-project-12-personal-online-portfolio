const navTrigger = document.getElementById('nav-trigger');
const nav = document.querySelector('.navigation');
const wrapper = document.querySelector('.wrapper');

navTrigger.addEventListener('click', () => {
	nav.style.right = '25%';
	wrapper.style.position = 'fixed';
	wrapper.style.left = '-100%';
});