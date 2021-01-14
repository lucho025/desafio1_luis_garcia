import React, { useState, useEffect } from 'react';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const products = [{
    id: 1,
    nombre: "Proyector 1",
    precio: "9999",
    imagen: image1,
    description: "Modelo 1",
    stock: 5,
    initial: 1,
    categoryId: "Proyectores",
  },{
    id: 2,
    nombre: "Proyector 2",
    precio: "10999",
    imagen: image2,
    description: "Modelo 2",
    stock: 7,
    initial: 2,
    categoryId: "Proyectores",
  },{
    id: 3,
    nombre: "Proyector 3",
    precio: "13999",
    imagen: image3,
    description: "Modelo 3",
    stock: 9,
    initial: 1,
    categoryId: "Proyectores",
  }
  ]
  
  function ItemDetailContainer() {
      const [ item, setItem ] = useState()
      const { id } = useParams()
  
      useEffect(() => {
          const promesa = new Promise((resolver, rechazar)=>{
          setTimeout(function(){
              const i = products.find(product => product.id == id)
              console.log(i)
              resolver(i); 
          }, 2000);
          }
          )
          promesa.then(result => setItem(result)) 
          promesa.catch(err => console.log("Error")) 
  
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
               <h2>Cargando</h2>}
          </div>
      )
  }

export default ItemDetailContainer