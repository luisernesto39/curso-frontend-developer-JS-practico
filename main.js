const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDestokpMenu);

function toggleDestokpMenu() {
    desktopMenu.classList.toggle('inactive');
}