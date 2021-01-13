import React , { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import Loader from './Loader'

const ItemDetailContainer = () => {

    const [item,setItem] = useState()

    useEffect(()=>{

        const pedido = new Promise((resuelto,rechazado)=>{
            setTimeout(()=>{
                resuelto({
                    id : "PROJ0038",
                    title : "Proyector Led Portatil PROJ0038",
                    price : 34999,
                    warranty : "Garantía de fábrica: 180 días",
                    description: "Descripcion 4",
                    pictures : [
                        "https://http2.mlstatic.com/D_Q_NP_2X_854840-MLA43409751175_092020-R.webp",
                        "https://www.mayoristaentecnologia.com.ar/sistema/fotos/productos/00000778_00001956_G_16092706305feb85661ca98.png",
                        "https://www.mayoristaentecnologia.com.ar/sistema/fotos/productos/00000048_foto_1609271108.jpg"
                    ]
                })
            },2000)
        })

        pedido
        .then(resuelto=>{
            setItem(resuelto)
        })
        .catch(err=>{
            console.log(err)
        })

    },[])

    return (
        <div>
            {item
            ? <ItemDetail item={item}/> 
            : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer