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