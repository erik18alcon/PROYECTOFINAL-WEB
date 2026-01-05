"use strict"

//HEADER-->NAV

const ButtonNav = document.querySelector( `.Button-Nav`)
const NavContent = document.querySelector( `.Nav-Content`)
console.log( ButtonNav )
console.log( NavContent )

ButtonNav.addEventListener( `click` , ()=>{
    NavContent.classList.toggle( `isOpen`)
})





//PRODUCTOS EN MOVIMIENTO

const ItemPrincipal = document.querySelectorAll( `.Item-principal`)
const ItemHidden = document.querySelectorAll( `.Item-Hidden`)
const HiddenClose = document.querySelectorAll( `.Hidden-Close`)

