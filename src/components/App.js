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
import {firestore} from './firebaseConfig'


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

const App = () => {

  
     
  
 

  const [items, setItems] = useState([])
  const [carrito,setCarrito] = useState([])
  const [total,setTotal] = useState(0)
  const [nombre,setNombre] = useState("")
  const [telefono,setTelefono] = useState("")
  const [email,setEmail] = useState("")


  useEffect(() => {
    const db = firestore
    const collection = db.collection("items")
    const query = collection.get()

    query
      .then(({docs})=>{
        
       /*  const arr = []
        docs.forEach(doc=>{
          
          // console.log(doc.id)
          // console.log(doc.data())
          
          const nuevoDoc = {
            id : doc.id,
            ...doc.data()
          }
          arr.push(nuevoDoc)
          // setItems([...items,nuevoDoc])
          console.log(nuevoDoc)

        })
        console.log(arr) */

        setItems(docs.map(doc=>({id:doc.id,...doc.data()})))
      })
      .catch(()=>{
        console.log("Fallo")
      })

      
    
    /* const articulos = new Promise((resolver, rechazar)=>{
      setTimeout(function(){
        resolver(products); 
      }, 2000);
    }                                                           se usaba para que funcione bien
    )
    articulos.then( result => setItems(result))  
    articulos.catch( err => console.log("Ha habido un error"))  */

   
  }, []);

  const manejarCarrito=({id,price,name})=>{
    setCarrito([...carrito,{id,price,name}])
    setTotal(total+price)
  }

  return (
    <div className="app">
     <CartProvider>

      <BrowserRouter>
        <Header />
        <CartWidget/>
        <Switch>
         <div>
         <h2>items</h2>
          <ul>
            {items.length > 0 
            ? items.map(item=>(
              <li key={item.id}>{item.name}<button onClick={()=>manejarCarrito(item)}>Agregar</button></li>
              ))
            : null
            }
          </ul>
          <h2>Carrito</h2>
          <ul>
            {carrito.length
            ?carrito.map(item=>(
              <li key={item.id}>{item.name}</li>
            ))
            :null 
          }
          </ul>
          <h2>Datos de Compra</h2>
          <form>
            <div>
              <input onChange={e=>setNombre(e.target.value)} type="text" placeholder="nombre" value={nombre}/>
            </div>
            <div>
              <input onChange={e=>setTelefono(e.target.value)} type="tel" placeholder="telefono" value={telefono}/>
            </div>
            <div>
              <input onChange={e=>setEmail(e.target.value)} type="email" placeholder="email" value={email}/>
            </div>
            <button>Comprar</button>
          </form></div> 
        
         {/*  <Route exact path="/">
            <ItemListContainer greeting="¡Bienvenido/a!" products={items} />
          </Route>
          
          <Route exact path="/category/:id">
            <ItemListContainer greeting="¡Bienvenido/a!" products={items} />   se usaba para funcionar
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route> */}

          

      </Switch>
      <Footer creador="Luis Garcia" fecha="2020"/>
      </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;

//      
