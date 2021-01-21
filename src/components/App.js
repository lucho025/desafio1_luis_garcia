import { useState, useEffect } from 'react';
import './App.css';
import ItemListContainer from './ItemListContainer';
import Header from './Header';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import ItemDetailContainer from './ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import CartWidget from './CartWidget';
import CartProvider from './CartContext';
import Cart from './Cart'



const products = [{
  id: 1,
  nombre: "DX-PRO 28",
  precio: "6899",
  imagen: image1,
  description: "Proyector Led Portatil DX-PRO 28",
  stock: 8,
  initial: 1,
  categoryId: "Negros",
},{
  id: 2,
  nombre: "RPROY-03",
  precio: "11999",
  imagen: image2,
  description: "Proyector Led Portatil RPROY-03",
  stock: 15,
  initial: 2,
  categoryId: "Blancos",
},{
  id: 3,
  nombre: "RPROY-04",
  precio: "14999",
  imagen: image3,
  description: "Proyector Led Portatil RPROY-04",
  stock: 19,
  initial: 1,
  categoryId: "Grises",
}
]

function App() {
  const [ items, setItems ] = useState([])

  useEffect(() => {
    const articulos = new Promise((resolver, rechazar)=>{
      setTimeout(function(){
        resolver(products); 
      }, 2000);
    }
    )
    articulos.then( result => setItems(result)) 
    articulos.catch( err => console.log("Ha habido un error")) 

  }, []);


  return (
    <div className="app">
     <CartProvider>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="¡Bienvenido/a!" products={items} />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer greeting="¡Bienvenido/a!" products={items} />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>

      </Switch>
      <CartWidget/>
      <Footer creador="Luis Garcia" fecha="2020"/>
      </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;

//      
