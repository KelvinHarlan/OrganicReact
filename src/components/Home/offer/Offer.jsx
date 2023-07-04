import './offer.css';
import Button from '../button/Button';
import { productOffer } from '../products/productsData';
import { FaStar } from "react-icons/fa";


function Offer() {
    return (
        <div className='offer_container'>
            <div className='title_container_offer'>
                <div className='title_box'>
                    <p className='cursiveFont'>Offer</p>
                    <h2 className='title_offer' >We Offer Organic For You</h2>
                </div>
                <div className='btn_offer_container'>
                    <Button className="btn btnBanner" text="View All Product" />
                </div>
            </div>
            <div className='cards_offer_container'>
                {
                    productOffer.map(({ id, name, typeName, price, newPrice, img }) => (

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
        </div>
    )
}

export default Offer;