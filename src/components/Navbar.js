import furnitureLogo from "../images/furniture-logo.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCartShopping, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../pages/Products";
import { useContext, useEffect, useState } from "react";
import Cart from "./Cart";

function Navbar() {

  const  {cartItems}  = useContext(CartContext);

  const totalAmount = () =>{
    if(cartItems.length > 0){
      return cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0);
    }else{
      return 0
    }
  } 

  const [cartAmount, setCartAmount] = useState(totalAmount)
  const [showLinks, setShowLinks] = useState(false)
  const [showCart, setShowCart] = useState(false)

  function randomProduct(){
    return Math.floor(Math.random() * (16 - 1 + 1)) + 1;
  }

  function toggleCart() {
    setShowCart(!showCart)
  }

  function toggleLink() {
    setShowLinks(!showLinks)
  }

  useEffect(() => {
    setCartAmount(totalAmount)
  }, [cartItems])

    return (
      <div className="Navbar">
        <div className={showLinks ? "show-mobile-nav" : "hide-mobile-nav"}>
          <p className="close-nav" onClick={() => toggleLink()} ><FontAwesomeIcon icon={faXmark}/></p>
          <div className="mobile-links">
            <p onClick={() => toggleLink()}><a href="/categories/All">Categories</a></p>
            <p onClick={() => toggleLink()}><a href={`/products/${randomProduct()}`}>Product Page</a></p>
          </div>
        </div>
        <Cart showCart={showCart} toggleCart={toggleCart} />
        <div className="navbar-container">
          <a href="/home"><img src={furnitureLogo} className="furniture-logo" alt="logo" /></a>
          <div className="links-container">
              <ul className="links">
                  <li className="link-item"><a href="/categories/All">CATEGORIES</a></li>
                  <li className="link-item"><a href={`/products/${randomProduct()}`}>PRODUCT PAGE</a></li>
                  <li className="cart-amount" onClick={() => toggleCart()}><FontAwesomeIcon icon={faCartShopping} /> {cartAmount === 0 ? "" : <span className="item-amount">{cartAmount}</span>}</li>
                  <li className="link-bars" onClick={() => toggleLink()}><FontAwesomeIcon icon={faBars} size="2xl"/></li>
              </ul>
              
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  