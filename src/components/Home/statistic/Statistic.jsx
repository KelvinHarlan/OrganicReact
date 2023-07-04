import './statistic.css';

function Statistic (){
    return (
        <div className='statistic_container'>
            <div className='card_statistic'>
                <h2 className='title_statistc'>100%</h2>
                <p>Organic</p>
            </div>
            <div className='card_statistic'>
                <h2 className='title_statistc'>285</h2>
                <p>Active Product</p>
            </div>
            <div className='card_statistic'>
                <h2 className='title_statistc'>350+</h2>
                <p>Organic Orchads</p>
            </div>
            <div className='card_statistic'>
                <h2 className='title_statistc'>25+</h2>
                <p>Years of Farming</p>
            </div> 
        </div>
    )
}

export default Statistic;