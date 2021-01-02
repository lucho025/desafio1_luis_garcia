
import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ItemListContainer from './ItemListContainer'
import Contador from './ItemCount' 



const App = () => {

    return (
        <>
            <Header/>
            <Contador/>
            <ItemListContainer greeting="Muchas gracias por visitar el sitio"/>
            <Footer creador="Luis Garcia" fecha="2020"/>

        </>
    )
}

export default App
