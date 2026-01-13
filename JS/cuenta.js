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

//REGISTRO DE USUARIO

const loginForm = document.querySelector(`.Login-Form`)
const registerText = document.querySelector(`.Register-Text`)
const registerForm = document.querySelector(`.Register-Form`)
const registerDone = document.querySelector(`.Register-Done`)
const registerButton = document.querySelector( `.Register-Button`)
console.log(loginForm)
console.log(registerText)
console.log(registerForm)
console.log(registerDone)
console.log(registerButton)

registerText.addEventListener(`click` , ()=>{
    registerForm.classList.toggle( `isActive`)
    loginForm.classList.add(`isOut`)
})
registerButton.addEventListener( `click` , ()=>{
    registerDone.classList.add( `isDone`)
})

