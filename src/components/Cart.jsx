import { Button } from '@material-ui/core';
import React, { useContext } from 'react'
import './Cart.css';
import {CartContext} from './CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';



function Cart() {
    const { cart, clearCart, totalizarPrecio } = useContext(CartContext)

    return (
        <div className="cart">
            { cart.length > 0 ? (
            <h1>Tu Carrito</h1>
            )    
            :
            ( <>
            <h1>Tu Carrito se encuentra Vacio</h1>
                <Link to={"/"}>
                <Button onClick={clearCart} variant="contained" color="primary">
                    Ir a Listado de productos
                </Button>
            </Link>
            </>)}

            <div className="cartItems">
                <table border="2"><tr>
                { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
                id={product.id}  name={product.name} image={product.image} price={product.price} 
                amount={product.amount} />)}</tr></table>
            </div>


            { cart.length > 0 &&
            <>
            <h2>${totalizarPrecio()}</h2>
            <div className="cartItems__buttons">
                <Button onClick={clearCart} variant="contained" color="primary">
                    Quitar Todo
                </Button>
                <Button onClick={() => {console.log(cart)}} variant="contained" color="primary">
                    Ir a Pagar
                </Button>
            </div>
            </>}


        </div>
    )
}

export default Cart
