import React from "react"
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <>
        <nav>
            <h1>Tienda de E-Commerce - Distrimundo</h1>
            <ul>
            <li><a href="#" target="_blank">Inicio</a></li>
            <li><a href="#" target="_blank">Productos</a></li>
            <li><a href="#" target="_blank">Formas de Pago</a></li>
            <li><a href="#" target="_blank">Metodos de Envio</a></li>
            <li><a href="#" target="_blank">Contacto</a></li>
            </ul>
        </nav>
        <CartWidget/>
        </>
    )
}

export default NavBar 