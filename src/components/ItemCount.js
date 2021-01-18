import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
    
function ItemCount({ item, aumentarContador, restarContador, reestablecerContador, agregarAlCarrito, counter, open }) {

    
    return (
        <div id="contador" align="center">
            <p>Unidades: {counter}</p>
            <button type="button" class="btn btn-primary" onClick={ aumentarContador}>Aumentar</button>
            <button type="button" class="btn btn-danger" onClick={ restarContador}>Restar</button>
            <button type="button" class="btn btn-warning" onClick={ reestablecerContador}>Reestablecer</button>
            <br></br><br></br>
            { !open ? (<div className="itemCount__agregar">
                <Button variant="contained" color="primary" onClick={ () => agregarAlCarrito(item)}>
                  <h3>Agregar al carrito</h3>
                </Button>
            </div>) : 
            (<Link to="/cart"><Button variant="contained" color="primary" >
            <h3>Terminar la compra</h3>
          </Button></Link>) }
            
        </div>
    )
}
export default ItemCount

