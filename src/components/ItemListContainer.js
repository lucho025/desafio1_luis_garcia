import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const articulos = [
    {
        id : "DX-PRO 28",
        title : "Proyector Led Portatil DX-PRO 28",
        price : 6899,
        pictureUrl : "https://http2.mlstatic.com/D_Q_NP_2X_854840-MLA43409751175_092020-R.webp"
    },
    {
        id : "RPROY-03",
        title : "Proyector Led Portatil RPROY-03",
        price : 11999,
        pictureUrl : "https://http2.mlstatic.com/D_Q_NP_2X_695579-MLA43972944428_112020-R.webp"
    },
    {
        id : "RPROY-04",
        title : "Proyector Led Portatil RPROY-04",
        price : 14999,
        pictureUrl : "https://http2.mlstatic.com/D_Q_NP_2X_625716-MLA43983696899_112020-R.webp"
    },
    {
        id : "PROJ0038",
        title : "Proyector Led Portatil PROJ0038",
        price : 34999,
        pictureUrl : "https://http2.mlstatic.com/D_Q_NP_2X_896428-MLA43929968159_102020-R.webp"
    },
    {
        id : "PROJ0032",
        title : "Proyector Led Portatil PROJ0032",
        price : 29999,
        pictureUrl : "https://http2.mlstatic.com/D_Q_NP_2X_676231-MLA42306761986_062020-R.webp"
    }
    
]

const ItemListContainer = ({greeting}) => {

    const [items,setItems] = useState([])

    useEffect(()=>{
        
        const pedido = new Promise((resuelto,rechazado)=>{
            setTimeout(()=>{
                resuelto(articulos)
            },2000)
        })

        pedido
        .then(resuelto=>{
            setItems(resuelto)
        })
        .catch(err=>{
            console.log(err)
        })

    },[])

    return (
        <div>
            <ItemList items={items}/>
            <ItemCount stock={5} initial={1}/>     
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer

