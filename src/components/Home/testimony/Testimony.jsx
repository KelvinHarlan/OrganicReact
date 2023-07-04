import './testimony.css';
import imgUser from '../../../images/testimonial/photo.jpg';
import { FaStar } from "react-icons/fa";

function Testimony() {
    return (

        <div className='user_container_testimonial'>
            <div className='testimony_container'>
                <div className='title_testimony_container'>
                    <p className='cursiveFont'>Testimonial</p>
                </div>
                <div>
                    <h2>What Our Customer Saying?</h2>
                </div>
            </div>
            <img className='photo_user' src={imgUser} alt="userIMG" />
            <div className='stars'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p className='text_user'>
            Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
            </p>
            <div className='name_user'>
                <h2>Sara Taylor</h2>
            </div>
        </div>

    )
}

export default Testimony;