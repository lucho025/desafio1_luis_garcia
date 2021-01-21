import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const products = [{
    id: 1,
    name: "DX-PRO 28",
    price: "6899",
    image: image1,
    description: "Proyector Led Portatil DX-PRO 28",
    stock: 8,
    initial: 1,
    categoryId: "Negros",
    
  },{
    id: 2,
    name: "RPROY-03",
    price: "11999",
    image: image2,
    description: "Proyector Led Portatil RPROY-03",
    stock: 15,
    initial: 2,
    categoryId: "Blancos",
  },{
    id: 3,
    name: "RPROY-04",
    price: "14999",
    image: image3,
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
        const producto = new Promise((resolver, rechazar)=>{
        setTimeout(function(){
            const i = products.find(product => product.id == id)
            resolver(i); 
        }, 2000);
        }
        )
        producto.then(result => setItem(result)) 
        producto.catch(err => console.log("Algo salio mal")) 

    },  [id]);

    return (
        <div className="itemDetailContainer">           
            { item ?
            <ItemDetail
             item={item}
             id={item.id}
             name={item.name}     
             price={item.price}
             image={item.image}
             description={item.description}
             stock={item.stock}
             initial={item.initial}
             />
             :
             <h2>Cargando</h2>}
        </div>
    )
}
export default ItemDetailContainer