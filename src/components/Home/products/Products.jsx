import './products.css';
import productsData from './productsData.js';
import { FaStar } from "react-icons/fa";




function Products({Button}) {

    return (
        <>
            <div className='title_product_container'>
                <div className='cursive_title_product cursiveFont'>Categories</div>
                <div className='our_products'>Our Products</div>
            </div>

            <div className='products_container'>


                {
                    productsData.map(({ id, name, typeName, price, newPrice, img }) => (

                        <div className='card_product' key={id}>
                            <div className='type_product'>{typeName}</div>
                            <img src={img} alt={name} />
                            <h2 className='product_name'>{name}</h2>
                            <div className='containe_price_and_stars'>
                                <div className="price_box">
                                    <p className='new_price'>${newPrice}</p>
                                    <p className='price'>${price}</p>
                                </div>
                                <div className='stars'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='btn_container'>
                <Button className='btn btnCategorie' text='Load More' />
            </div>
        </>
    )
}

export default Products;