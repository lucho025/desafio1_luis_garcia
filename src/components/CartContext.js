import React, { useState, useEffect } from 'react'
export const CartContext = React.createContext();

function CartProvider( { children }) {
    const [ cart, setCart ] = useState([])
    const [ quantity, setQuantity ] = useState(0)
    const [ total, setTotal ] = useState()
    const [ totaleQ, setTotaleQ ] = useState()


    useEffect(() => {
        var t = 0
        const totals = cart.map( p => p.price * p.amount)
        totals.map( p => t = t + p)
        setTotal(t)

        var y = 0
        const totaleQ = cart.map( p => 1 * p.amount)
        totaleQ.map( z => y = y + z)
        setTotaleQ(y)

        
        const cartQuantity = cart.length
        setQuantity(cartQuantity)
        console.log(cart)
        console.log(quantity)
    }, [cart])


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
     
            <CartContext.Provider value ={{ cart, quantity, total, totaleQ, addToCart, eliminateFromCart, clearCart, sizeQuantity, price }}>
                { children }
            </CartContext.Provider>
    )
}

export default CartProvider;
