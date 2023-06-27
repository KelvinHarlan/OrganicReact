


function MiniCard ({img, title, text}){
    return (
        <div className='cardCategorie'>
        <img src={img} alt="veganImg" />
        <div className='veganCard'>

            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
    )
}

export default MiniCard;