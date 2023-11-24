const userEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuIcon = document.querySelector('.menu-hamburguer')
const sidebar = document.querySelector('.mobile-menu')
const iconCart = document.querySelector('.navbar-shopping-cart')
const cartDetail = document.querySelector('#shoppingCart')
const cardsContainer = document.querySelector('.cards-container')
const asideProductDetail = document.querySelector('#producrDetail')
const buttonCloseAside = document.querySelector('.product-detail-close')

userEmail.addEventListener('click', toggleMenu)
menuIcon.addEventListener('click', menuMobile)
iconCart.addEventListener('click', cartDetails)
buttonCloseAside.addEventListener('click', closeAside)
function toggleMenu() {
  const isCartDetailsOpen = cartDetail.classList.contains('inactive')
  if (!isCartDetailsOpen) {
    cartDetail.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive');
}

function menuMobile() {
  const isCartDetailsOpen = cartDetail.classList.contains('inactive')
  const viewDetails = asideProductDetail.classList.contains('inactive')
  if (!isCartDetailsOpen) {
    cartDetail.classList.add('inactive')
  }else if (!viewDetails){
    asideProductDetail.classList.add('inactive')
  }
  sidebar.classList.toggle('inactive');
}

function cartDetails() {
  /*Evaluar si algun elemento esta abierto */
  const isMenuMobileClose = sidebar.classList.contains('inactive')
  const userMenu = desktopMenu.classList.contains('inactive')
  const isAsideProductDetail = asideProductDetail.classList.contains('inactive')

  if (!isMenuMobileClose) {
    sidebar.classList.add('inactive') //Si no contiene inactive (const=(false))
  } else if (!userMenu) {
    desktopMenu.classList.add('inactive') //Si no contiene inactive (const=(false))
  } else if (!isAsideProductDetail){
    asideProductDetail.classList.add('inactive') //Si no contiene inactive (const=(false))
  }
  cartDetail.classList.toggle('inactive')
}

function viewDetails() {
  cartDetail.classList.add('inactive')
  asideProductDetail.classList.remove('inactive')
}

function closeAside() {
  asideProductDetail.classList.add('inactive')
}

const productList = []
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  alt: 'Bicicleta negra en fondo de madera.'
})
productList.push({
  name: 'Laptop',
  price: 1120,
  image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Bicicleta negra en fondo de madera.'
})
productList.push({
  name: 'iPhone',
  price: 840,
  image: 'https://images.pexels.com/photos/3571093/pexels-photo-3571093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Bicicleta negra en fondo de madera.'
})
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  alt: 'Bicicleta negra en fondo de madera.'
})
productList.push({
  name: 'Laptop',
  price: 1120,
  image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Bicicleta negra en fondo de madera.'
})
productList.push({
  name: 'iPhone',
  price: 840,
  image: 'https://images.pexels.com/photos/3571093/pexels-photo-3571093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Bicicleta negra en fondo de madera.'
})
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  alt: 'Bicicleta negra en fondo de madera.'
})
productList.push({
  name: 'Laptop',
  price: 1120,
  image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Bicicleta negra en fondo de madera.'
})
productList.push({
  name: 'iPhone',
  price: 840,
  image: 'https://images.pexels.com/photos/3571093/pexels-photo-3571093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Bicicleta negra en fondo de madera.'
})

/*Product list iteration */
function renderProducts(items) {
  for (product of items) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)
    productImg.setAttribute('alt', product.alt)
    productImg.addEventListener('click', viewDetails)
  
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
  
    const productInfoDiv = document.createElement('div')
    
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p')
    productName.innerText = product.name
  
    const productInfoFigure = document.createElement('figure')
    const productIconCart = document.createElement('img')
    productIconCart.setAttribute('src', '../icons/bt_add_to_cart.svg')
    /*Construction HTML tags */
    cardsContainer.appendChild(productCard)
    productCard.append(productImg, productInfo)
    productInfo.append(productInfoDiv, productInfoFigure)
    productInfoDiv.append(productPrice, productName)
    productInfoFigure.appendChild(productIconCart)
  }
}

renderProducts(productList)