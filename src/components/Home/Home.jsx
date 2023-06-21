import './home.css';
import bannerHome from '../../Images/bannerHome.jpg';
import Card from './cards/Card';

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
                    <Card className="card01" textCursive="Naturall!!" textBold="Get Garden Fresh Fruits" />
                    <Card className="card02" textCursive="Offer!!" textBold="Get 10% off
on Vegetables" />
        
                </div>
            </section>


        </main>
    )
}

export default Home;

