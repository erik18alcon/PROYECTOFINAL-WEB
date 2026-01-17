"use strict"


//HEADER-->NAV

const ButtonNav = document.querySelector( `.Button-Nav`)
const NavContent = document.querySelector( `.Nav-Content`)
console.log( ButtonNav )
console.log( NavContent )

ButtonNav.addEventListener( `click` , ()=>{
    NavContent.classList.toggle( `isOpen`)
})




// DATOS DE COMPRA | EN ESTA PARTE HE TENIDO QUE AYUDARME DE IA, PUES ME DABA MUCHOS PROBLEMAS Y NO LLEGABA A FUNCIONAR DEL TODO BIEN.

//leer cesta

let cesta = JSON.parse(localStorage.getItem("cesta")) || []

const lista = document.getElementById("Resume-Products")
const totalElements = document.getElementById("total")

let total = 0

//si no hay productos

if (cesta.length === 0) {
    lista.innerHTML = "<p>No hay productos en la cesta</p>"
} else {

//recorrer productos + crear HTML

cesta.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad
    total += subtotal

    const item = document.createElement("p")
    item.innerHTML = `
    
    ${producto.nombre} x${producto.cantidad}
    <span>${subtotal} EUR</span>`


    lista.appendChild(item)
})
}

totalElements.textContent = `Total: ${total} EUR`


