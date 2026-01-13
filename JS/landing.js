"use strict"

//HEADER-->NAV

const ButtonNav = document.querySelector( `.Button-Nav`)
const NavContent = document.querySelector( `.Nav-Content`)
console.log( ButtonNav )
console.log( NavContent )

ButtonNav.addEventListener( `click` , ()=>{
    NavContent.classList.toggle( `isOpen`)
})

//HEADER--CESTA DE COMPRA

const buyIcon = document.querySelector(`.Buy-Icon`)
const headerCart = document.querySelector(`.Header-Cart`)

buyIcon.addEventListener(`click` , ()=>{
    headerCart.classList.toggle(`isHere`)
})

//BOTON DE SUSCRIPCION A LA NEWSLETTER

const registerDone = document.querySelector(`.Register-Done`)
const newsletterButton = document.querySelector( `.Newsletter-Button`)
console.log(registerDone)
console.log(newsletterButton)

newsletterButton.addEventListener( `click` , ()=>{
    registerDone.classList.add( `isDone`)
})

