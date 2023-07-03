import './home.css';
import Card from './cards/Card';
import imgCategoriesLogo from '../../Images/photoCategories.png'
import vegan from '../../Images/vegan.png'
import MiniCard from '../miniCard/MiniCard.jsx';
import qualit from '../../Images/Quality.png'
import Button from './button/Button';
import Products from './products/Products';


function Home() {
    return (
        <main className='containerHome'>

            <div className='textBanner'>
                <div className='contentTextBanner'>
                    <p className='cursiveText'>100% Natural food</p>
                    <h2>Choose the best healthier way of life</h2>
                </div>
                <Button className=' btn btnBanner' text='Explore Now' />
            </div>

            <section className='salesContainer'>
                <div className='cardsSalesBox'>
                    <Card
                        className="card01"
                        textCursive="Naturall!!"
                        textBold="Get Garden Fresh Fruits" />

                    <Card className="card02"
                        textCursive="Offer!!"
                        textBold="Get 10% off on Vegetables" />
                </div>
            </section>
            <section className='categoriesContainer'>
                <div className='imgCategoriesLogo'>
                    <img src={imgCategoriesLogo} alt="Categories Logo" />
                </div>
                <div className='textCategories'>
                    <div className='box1'>
                        <p className='cursiveFont'>About Us</p>
                        <h4>We Believe in Working Accredited Farmers</h4>
                        <p>Simply dummy text of the printing and typesetting industry.
                            Lorem had ceased to been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                    <div className='box2'>
                        <MiniCard img={vegan}
                            title='Organic Foods Only'
                            text='Simply dummy text of the printing and typesetting industry. Lorem Ipsum' />
                        <MiniCard img={qualit}
                            title='Quality Standards'
                            text='Simply dummy text of the printing and typesetting industry. Lorem Ipsum' />
                    </div>
                    <Button className='btn btnCategorie' text='Shop Now' />
                </div>
            </section>

            <section>
            <Products Button={Button} />
            </section>


        </main>
    )
}

export default Home;

