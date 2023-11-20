const userEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuIcon = document.querySelector('.menu-hamburguer')
const sidebar = document.querySelector('.mobile-menu')
const iconCart = document.querySelector('.navbar-shopping-cart')
const cartDetail = document.querySelector('.product-detail')


userEmail.addEventListener('click', toggleMenu)
menuIcon.addEventListener('click', menuMobile)
iconCart.addEventListener('click', cartDetails)

function toggleMenu() {
  const isCartDetailsOpen = cartDetail.classList.contains('inactive')
  if (!isCartDetailsOpen) {
    cartDetail.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive');
}

function menuMobile() {
  const isCartDetailsOpen = cartDetail.classList.contains('inactive')
  if (!isCartDetailsOpen) {
    cartDetail.classList.add('inactive')
  }
  sidebar.classList.toggle('inactive');
}

function cartDetails() {
  const isMenuMobileClose = sidebar.classList.contains('inactive')
  const userMenu = desktopMenu.classList.contains('inactive')
  if (!isMenuMobileClose) {
    sidebar.classList.add('inactive')
  } else if (!userMenu) {
    desktopMenu.classList.add('inactive')
  }
  cartDetail.classList.toggle('inactive')
}