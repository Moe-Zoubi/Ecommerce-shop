import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductData from "../products/ProductData";
import { currencyFormatter } from '../Utils';
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext();

export default function Products() {

    const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const product = ProductData.filter((product) => product.id === parseInt(id));


    const [quantity, setQuantity] = useState(1);
    const [item, setItem] = useState({
        id: 0,
        name: "",
        price: 0,
        quantity: 1,
        img: "",
    })
    const [displayImage, setDisplayImage] = useState(product[0].img01);

    const increase = () => {
        if (quantity >= 1) {
          setQuantity(quantity + 1);
        }
    };
    
    const decrease = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
    };
    
    const totalPrice = (price, quantity) => {
        return currencyFormatter.format(price * quantity)
    }
    
    useEffect(() => {
        setDisplayImage(product[0].img01)
      }, [id]);

    useEffect(() => {
        setItem({
            id: product[0].id,
            name: product[0].name,
            price: product[0].price,
            quantity: quantity,
            img: product[0].img01,
        })
      }, [id, quantity]);
    
    return(
        <div className="products">
            <div className="current-product">
                <div className="img-library flex-item">
                    <div className="display-img">
                        <img src={displayImage} alt="product-img" />
                    </div>
                    <div className="img-gallery">
                        <img onClick={() =>{ setDisplayImage(product[0].img01)}} src={product[0].img01} alt="product-img" />
                        <img onClick={() =>{ setDisplayImage(product[0].img02)}} src={product[0].img02} alt="product-img" />
                        <img onClick={() =>{ setDisplayImage(product[0].img03)}} src={product[0].img03} alt="product-img" />
                    </div>
                </div>
                <div className="product-info flex-item">
                    <p className="product-heading">{product[0].name}</p>
                    <p className="product-description">{product[0].description}</p>
                    <div className="product-quantity">
                        <p>Quantity</p>
                        <div className="quantity-btns">
                            <button onClick={decrease}>-</button>
                            <p className="quantity">{quantity}</p>
                            <button onClick={increase}>+</button>
                        </div>
                        <p className="product-price">{totalPrice(product[0].price, quantity)}</p>
                    </div>
                    <div className="buy-product">
                        <button onClick={() => addToCart(item)} className="atc-btn">ADD TO CART</button>
                        <button className="buy-btn">BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className="specifications">
                <div className="spec">
                    <p className="spec-title">Size:</p>
                    <p className="title-description">{product[0].size}</p>
                </div>
                <div className="spec">
                    <p className="spec-title">Texture:</p>
                    <p className="title-description">{product[0].texture}</p>
                </div>
                <div className="spec">
                    <p className="spec-title">Weight:</p>
                    <p className="title-description">{product[0].weight}</p>
                </div>
            </div>
            <div className='trending-display'>
                <h2>Trending Products</h2>
                <div className='trending-container'>
                    {ProductData.map((product) =>{
                        return(<div className="trending-product" onClick={() => {navigate(`/products/${product.id}`); setQuantity(1);}} key={product.id}>
                            <img src={product.img01} alt='img' className='trending-img' />
                            <p className='product-name'>{product.name}</p>
                            <p className='product-price'>{currencyFormatter.format(product.price)}</p>
                        </div>)
                    })}  
                </div>
            </div>
        </div>
    )
}