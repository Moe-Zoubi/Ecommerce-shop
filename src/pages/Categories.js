import { useState } from "react"
import ProductData from "../products/ProductData";
import { currencyFormatter } from '../Utils';
import { useNavigate, useParams } from 'react-router-dom';




export default function Categories() {

    const { type } = useParams();
    const navigate = useNavigate();

    const [productType, setProductType] = useState(type);
    
    
    const furnitureTypes = (arr) => {
        let unique = [];
        arr.forEach(product => {
            if (!unique.includes(product.type)) {
                unique.push(product.type);
            }
        });
        return unique;
    };
    const chosenProduct = (id) => {
        try {
          navigate(`/products/${id}`);
        } catch (error) {
          console.log(error.message);
        }
      };


    function displayProducts(type, arr){
        if(type === "All"){
            return arr.map((item) =>{
                return(
                    <div className='product' onClick={() => chosenProduct(item.id)} key={item.id}>
                        <img src={item.img01} alt='img' className='product-img' />
                        <p className='product-name'>{item.name}</p>
                        <p className='product-price'>{currencyFormatter.format(item.price)}</p>
                    </div>
                    )
                })
        } else{
            return arr.filter((item) => item.type === type).map((item) =>{
                return(
                    <div className='product' onClick={() => chosenProduct(item.id)} key={item.id}>
                        <img src={item.img01} alt='img' className='product-img' />
                        <p className='product-name'>{item.name}</p>
                        <p className='product-price'>{currencyFormatter.format(item.price)}</p>
                    </div>
                    )
                })
        }
    }

    return(
        <div className="categories">
            <h2 className="title">{productType.toLocaleUpperCase()}</h2>
            <div className="btn-container">
                <button 
                onClick={() => {
                    setProductType("All")
                    navigate(`/categories/All`)
                    }} className="type-btn">All</button>
                {furnitureTypes(ProductData).map((type) => <button key={type} 
                onClick={() => {
                    setProductType(type) 
                    navigate(`/categories/${type}`)
                    }} className="type-btn">{type}</button>)}
            </div>
            <div className='product-container'>
                {displayProducts(productType, ProductData)}
            </div>
        </div>
    )
}