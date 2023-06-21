import './home.css';
import Card from './cards/Card';
import imgCategoriesLogo from '../../Images/photoCategories.png'

function Home() {
    return (
        <main className='containerHome'>

            <div className='textBanner'>
                <div className='contentTextBanner'>
                    <p className='cursiveText'>100% Natural food</p>
                    <h2>Choose the best healthier way of life</h2>
                    <button className='btnBanner'>Explore Now</button>
                </div>
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
                        
                    </div>
                </div>
            </section>


        </main>
    )
}

export default Home;

