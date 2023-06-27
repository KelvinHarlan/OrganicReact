import "./button.css";
import img from '../../../Images/vector.png'

function Button ({className, text}){
    return (
        <button className={className}>{text} <img src={img}/></button>
    )
}

export default Button;