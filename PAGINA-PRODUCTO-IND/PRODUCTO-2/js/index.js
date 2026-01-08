"use strict"


//HEADER-->NAV

const ButtonNav = document.querySelector(`.Button-Nav`)
const NavContent = document.querySelector(`.Nav-Content`)
console.log(ButtonNav)
console.log(NavContent)

ButtonNav.addEventListener(`click`, () => {
    NavContent.classList.toggle(`isOpen`)
})

//CESTA DE COMPRA

const buyIcon = document.querySelector(`.Buy-Icon`)
const headerCart = document.querySelector(`.Header-Cart`)
const cartText = document.querySelector(`.Cart-Text`)
const cartProduct = document.querySelector( `.Cart-Product`)
const cartTotal = document.querySelector(`.Cart-Total`)
const addSelector = document.querySelector(`.Add-Selector`)


buyIcon.addEventListener(`click` , ()=>{
    headerCart.classList.toggle(`isHere`)
})

addSelector.addEventListener( `click` , ()=>{
    cartText.classList.toggle( `isNone`)
    cartProduct.classList.toggle(`isWorking`)
    cartTotal.classList.toggle( `isOn`)
})



//GUIA DE TALLAS OCULTA
const SizeGuide = document.querySelector(`.Size-Guide`)
const GuideHidden = document.querySelector(`.Guide-Hidden`)
const GuideClose = document.querySelector(`.Guide-Close`)
console.log(SizeGuide)
console.log(GuideHidden)
console.log(GuideClose)

SizeGuide.addEventListener(`click`, () => {
    GuideHidden.classList.add(`isActive`)
})

GuideClose.addEventListener(`click`, () => {
    GuideHidden.classList.remove(`isActive`)
})

//CARROUSEL DE IMÁGENES DE PRODUCTO

const ProductImgs = document.querySelector(`.Product-Imgs`)
const ProductImg = document.querySelectorAll(`.Product-Img`)
console.log(ProductImgs)
console.log(ProductImg)

let index = 0
const totalImgs = ProductImg.length
const imgHeight = ProductImg[0].getBoundingClientRect().height

ProductImgs.addEventListener(`click`, () => {
    index = (index + 1) % totalImgs
    ProductImgs.style.transform = `translateY(-${index * imgHeight}px )`
})

