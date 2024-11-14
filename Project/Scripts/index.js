// JavaScript source code
const hamMenu = document.querySelector('.ham-menu');

const meni = document.querySelector('.meni');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    meni.classList.toggle('active');
})