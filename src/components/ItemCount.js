import React, { useState } from 'react'

function Contador() {
    const [contador,setContador] = useState(1)
    const aumentarContador = ()=>{
    setContador(contador + 1)
}
const restarContador = ()=>{
    setContador(contador - 1)
}
const reestablecerContador = ()=>{
    setContador(1)
}
    return (
        <div id="contador" align="center">
            <p>Unidades: {contador}</p>
            <button type="button" class="btn btn-primary" onClick={ aumentarContador}>Aumentar</button>
            <button type="button" class="btn btn-danger" onClick={ restarContador}>Restar</button>
            <button type="button" class="btn btn-warning" onClick={ reestablecerContador}>Reestablecer</button>
            <br></br><br></br>
            <button type="button" class="btn btn-outline-primary">Agregar al carrito</button>
        </div>
    )
}

export default Contador

