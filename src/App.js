import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import Products, { CartContext } from './pages/Products';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  const [cartItems, setCartItems] = useState([]);
  

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const deleteFromCart = (id) => {
    const CartCopy = [...cartItems];
    const productIndex = cartItems.findIndex((product => product.id === id));
    CartCopy.splice(productIndex, 1);
    setCartItems(CartCopy);
  };

  const editCart = (id, type) => {
    setCartItems((prevCart) => {
      return prevCart.map((item) =>{
        if(item.id === id && type === "add"){
          return{
            ...item,
            quantity: item.quantity + 1,
          }
        }
        if(item.id === id && type === "decrease"){
          return{
            ...item,
            quantity: item.quantity - 1,
          }
        }
        return item;
      })
    })
  }

  useEffect(() => {
    const json = localStorage.getItem("cartItems");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  useEffect(() => {
    if(cartItems.length > 0){
      const json = JSON.stringify(cartItems);
      localStorage.setItem("cartItems", json);
      console.log("Refreshed Cart")
    }
  }, [cartItems]);

  return (
    <CartContext.Provider value={ {cartItems, setCartItems, addToCart, editCart, deleteFromCart} }>
      <div className="App">
        <div className='wrap-container'>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route index path='/' element={<HomePage />} />
              <Route path='categories/:type' element={<Categories />} />
              <Route path='products/:id' element={<Products />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
