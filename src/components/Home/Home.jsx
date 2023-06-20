import './home.css';
import bannerHome from '../../Images/bannerHome.jpg';

function Home() {
    return (
        <main className='containerHome'>
            <section className='bannerHome'>
                <img className='bannerImg' src={bannerHome} alt="Banner" />
            </section>
            <div className='textBanner'>
                <div className='contentTextBanner'>
                    <p className='cursiveText'>100% Natural food</p>
                    <h2>Choose the best healthier way of life</h2>
                    <button className='btnBanner'>Explore Now</button>
                </div>

            </div>

        </main>
    )
}

export default Home;

