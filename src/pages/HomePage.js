import { useNavigate } from 'react-router-dom';
import { currencyFormatter } from '../Utils';
import ProductData from "../products/ProductData";

export default function HomePage() {

    const navigate = useNavigate();

    const topProducts = ProductData.slice(0,8);
    

    return(
        <div className='homepage'>
            <div className="flex-container">
                <div className="house-items" onClick={() => navigate(`/categories/All`)}>
                    <p className="item-title">Live Comfortably</p>
                </div>
                <div className="equipment-items">
                    <div className="kitchen" onClick={() => navigate(`/categories/Kitchen`)}>
                        <p className="item-title">Kitchen</p>
                    </div>
                    <div className="electronics" onClick={() => navigate(`/categories/Electronics`)}>
                        <p className="item-title">Electronics</p>
                    </div>
                </div>
            </div>
            <div className='product-display'>
                <h2>Products we are proud of</h2>
                <div className='product-container'>
                    {topProducts.map((item) =>{
                        return(
                            <div className='product' onClick={() => navigate(`/products/${item.id}`)} key={item.id}>
                                <img src={item.img01} alt='img' className='product-img' />
                                <p className='product-name'>{item.name}</p>
                                <p className='product-price'>{currencyFormatter.format(item.price)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='banner'>
                <div className='banner-item'>
                    <div className='banner-text'>
                        <h2>Creative harmonious living</h2>
                        <p>Moe Products are all made to standard sizes so that you can mix and match them freely.</p>
                        <button  onClick={() => navigate(`/products/1`)}>SHOP NOW</button>
                    </div>
                </div>
                <div className='banner-item wooden-shelf'></div>
            </div>
            <div className='trending-display'>
                <h2>Trending Products</h2>
                <div className='trending-container'>
                    {ProductData.map((product) =>{
                        return(<div className="trending-product" onClick={() => navigate(`/products/${product.id}`)} key={product.id}>
                            <img src={product.img01} alt='img' className='trending-img' />
                            <p className='product-name'>{product.name}</p>
                            <p className='product-price'>{currencyFormatter.format(product.price)}</p>
                        </div>)
                    })}  
                </div>
            </div>
            <div className='banner'>
                <div className='banner-item white-shelf'></div>
                <div className='banner-item'>
                    <div className='banner-text'>
                        <h2>Comfortable & Elegante Living</h2>
                        <p>Moe Products are all made to standard sizes so that you can mix and match them freely.</p>
                        <button onClick={() => navigate(`/products/1`)}>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}