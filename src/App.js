
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ItemListContainer from './ItemListContainer'


const App = () => {
    return (
        <>
            <Header/>
            <ItemListContainer greeting="Muchas gracias por visitar el sitio"/>
            <Footer creador="Luis Garcia" fecha="2020"/>
            
        </>
    )
}

export default App
