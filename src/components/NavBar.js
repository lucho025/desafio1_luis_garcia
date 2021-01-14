import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const categories = [{
    categoryId: "Negros",
    name: "Negros"
},
{
    categoryId: "Blancos",
    name: "Blancos"
},{
    categoryId: "Grises",
    name: "Grises"
}]

const Navbar = () => {
    return (
        <>
            <nav>
            <h1>Tienda de E-Commerce - Distrimundo</h1>
            <ul>
            <li><Link to={''}>Inicio</Link></li>            
                { categories.map( category => <li><Link to={`/category/${category.categoryId}`}>
                    {category.name}
                    </Link></li>)}
            <li><a href="#" target="_blank">Formas de Pago</a></li>
            <li><a href="#" target="_blank">Metodos de Envio</a></li>
            <li><a href="#" target="_blank">Contacto</a></li>        
                
            </ul>
            </nav>
        </>   
    )
}

export default Navbar