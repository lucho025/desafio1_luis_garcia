
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount'
import CartWidget from './CartWidget'



const App = () => {
    return (
        <>
            <Header/>
            <CartWidget/>
            <ItemCount/>
            <ItemListContainer greeting="Muchas gracias por visitar el sitio"/>
            <Footer creador="Luis Garcia" fecha="2020"/>
            
        </>
    )
}

export default App
