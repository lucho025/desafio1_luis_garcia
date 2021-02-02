import React, { useState, useEffect } from 'react'
export const CartContext = React.createContext();

function CartProvider( { children }) {
    const [ cart, setCart ] = useState([])
  // const [ quantity, setQuantity ] = useState(0)
    const [ total, setTotal ] = useState()
    const [ totaleQ, setTotaleQ ] = useState()


    function totalizar() {
        let t = 0
        cart.forEach(element =>
            {
                t = t + element.amount
            });
            return t
        
    }

    function totalizarPrecio(){
        let t = 0
        cart.forEach(element => {
            t = t + (element.amount * element.price)
        });
        return t
    }


    function isInCart(id){
        const item = cart.find(p => p.id === id)
        if (item === undefined){
            console.log("prueba");
            return false
        }
        else {
            
            return true
        }
    }

    function addToCart(product, counter, id) {
         
        if (isInCart(id)){
            const oldProduct = cart.find(p => p.id === id)
            const newQuantity = oldProduct.amount + counter           
            const newProduct = { id: oldProduct.id, name: oldProduct.name, image: oldProduct.image, price: oldProduct.price, amount: newQuantity}
            const cartWithoutOld = cart.filter(product => product.id != id)
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCart(cartWithNew)            
        } else {
            const newItem = { id: product.id, name: product.name, image: product.image, price: product.price, amount: counter }
            setCart([...cart, newItem]) 
        }
    }

    const sizeQuantity = () => {
        return cart.reduce((prev, next) => prev + next.quantity, 0)
    }

    const price = () => {
        return cart.reduce((prev, next) =>
            (prev + (next.quantity * next.item.price)), 0)
    }

    function eliminateFromCart(id){
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
    }

    function clearCart(){
        setCart([])
    }

    return (
     
            <CartContext.Provider value ={{ cart, quantity: cart.length, total, totaleQ, addToCart, eliminateFromCart, clearCart, sizeQuantity, price, totalizar, totalizarPrecio }}>
                { children }
            </CartContext.Provider>
    )
}

export default CartProvider;
