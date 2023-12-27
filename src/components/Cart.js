import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../pages/Products";
import { currencyFormatter } from '../Utils';

function Cart(props) {


  const  {cartItems, editCart, deleteFromCart}  = useContext(CartContext);

  function totalAmount(arr){
    if(arr.length > 0){
      return arr.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.quantity * currentItem.price);
      }, 0);
    }else{
      return 0
    }
  }

  function totalQuantity(arr){
    if(arr.length > 0){
      return arr.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0);
    }else{
      return 0
    }
  }

    return (
      <div className={props.showCart ? "show-cart cart" : "hide-cart cart"}>
        <div className="cart-heading">
          <p className="cart-title">{`Your Shopping Cart ${totalQuantity(cartItems) > 0 ?  `(${totalQuantity(cartItems)})` : "Is Empty"}`}</p>
            <p className="close-btn" onClick={props.toggleCart}><FontAwesomeIcon icon={faXmark} /></p>
        </div>
        <div className="cart-body">
          <div className="full-cart">
          {cartItems.map((product) => {
            return(
              
                <div className="cart-product" key={product.id}>
                  <div className="cart-left">
                    <img src={product.img} alt="picture" />
                  </div>
                  <div className="cart-middle">
                    <p className="item-name">{product.name}</p>
                    <div className="cart-btns">
                      <button onClick={() => product.quantity === 1
                        ? deleteFromCart(product.id)
                        : editCart(product.id, "decrease")}>
                          {product.quantity === 1 ? <FontAwesomeIcon icon={faTrashCan} /> : "-"}
                      </button>
                      <p>{product.quantity}</p>
                      <button onClick={() => editCart(product.id, "add")}>+</button>
                    </div>
                  </div>
                  <p className="cart-right">{currencyFormatter.format(product.price * product.quantity)}</p>
                </div>
            )
          })}
          </div>
        </div>
        <div className="checkout">
            <p className="checkout-title">Subtotal</p>
            <div className="checkout-total">
              <p className="total-amount">{currencyFormatter.format(totalAmount(cartItems))}</p>
              <button>Go to checkout</button>
            </div>
          </div>
      </div>
    );
  }
  
  export default Cart;
  