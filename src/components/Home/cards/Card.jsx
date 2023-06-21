import './card.css';

function Card ({textCursive, textBold, className}){
    return (
        <div className={`card ${className}`}>
            <div className='textCardContainer'>
                <p>{textCursive}</p>
                <h4>{textBold}</h4>
            </div>
        </div>
    )
}

export default Card;

