import React,{useContext} from 'react'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom'



function CartWidget() {
    const { quantity } = useContext(CartContext)
    const { totaleQ } = useContext(CartContext)



    return (
        <>
             { quantity > 0 && 
            <p align="center">
                <p></p> 
{/*                 <img src="https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/PROJ0046/1000x1000-PROJ0046.jpg&w=500&q=100" height="100px"></img>
 */}                <br></br>
                <Link to="/cart"><i class='fas fa-cart-arrow-down' style={{fontSize: 40}}></i></Link>   
          
                <h4>Usted posee {totaleQ} articulos agregados al carrito</h4>

            </p>}
        </>
    )
}

export default CartWidget
