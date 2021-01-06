import React, { useState } from 'react'

const Contador = ({stock,initial}) => {

    const [contador,setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }

    const reestablecerContador = ()=>{
        setContador(1)
    }

    const onAdd = () => {
        console.log("Se van a solicitar "+contador+" unidades")
    }


    return (
        <div id="contador" align="center">
            <p>Unidades: {contador}</p>
            <button type="button" class="btn btn-primary" onClick={ aumentarContador}>Aumentar</button>
            <button type="button" class="btn btn-danger" onClick={ restarContador}>Restar</button>
            <button type="button" class="btn btn-warning" onClick={ reestablecerContador}>Reestablecer</button>
            <br></br><br></br>
            <button type="button" class="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default Contador

