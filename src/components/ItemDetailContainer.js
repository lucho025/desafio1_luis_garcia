import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const products = [{
    id: 1,
    nombre: "DX-PRO 28",
    precio: "6899",
    imagen: image1,
    description: "Proyector Led Portatil DX-PRO 28",
    stock: 8,
    initial: 1,
    categoryId: "Negros",
    
  },{
    id: 2,
    nombre: "RPROY-03",
    precio: "11999",
    imagen: image2,
    description: "Proyector Led Portatil RPROY-03",
    stock: 15,
    initial: 2,
    categoryId: "Blancos",
  },{
    id: 3,
    nombre: "RPROY-04",
    precio: "14999",
    imagen: image3,
    description: "Proyector Led Portatil RPROY-04",
    stock: 19,
    initial: 1,
    categoryId: "Grises",
  }
  ]
  
  function ItemDetailContainer() {
    const [ item, setItem ] = useState()
    const { id } = useParams()

    useEffect(() => {
        const articulo = new Promise((resolver, rechazar)=>{
        setTimeout(function(){
            const i = products.find(product => product.id == id)
            console.log(i)
            resolver(i); 
        }, 2000);
        }
        )
        articulo.then(result => setItem(result)) 
        articulo.catch(err => console.log("Algo salio mal")) 

    },  [id]);

    return (
        <div className="itemDetailContainer">
            { item ?
            <ItemDetail
             id={item.id}
             name={item.nombre}     
             price={item.precio}
             image={item.imagen}
             description={item.description}
             stock={item.stock}
             initial={item.initial}
             />
             :
             <h2>Loading</h2>}
        </div>
    )
}

export default ItemDetailContainer