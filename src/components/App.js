
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ItemListContainer from './ItemListContainer'
import CartWidget from './CartWidget'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer'


const App = () => {
    return (
        <div className="app">
          <BrowserRouter>
            <Header />
            <CartWidget/>
            <Switch>
              <Route exact path="/">
                <ItemListContainer greeting="Gracias por visitar el sitio"/>
              </Route>
              <Route exact path="/category/:id">
                <ItemListContainer greeting="Gracias por visitar el sitio"/>
              </Route>
              <Route exact path="/item/:id">
                <ItemDetailContainer />
              </Route>
          </Switch>
          <Footer/>
          </BrowserRouter>
        </div>
      );
}

export default App
