const userEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

userEmail.addEventListener('click', toggleMenu)

function toggleMenu() {
  desktopMenu.classList.toggle('inactive');
}