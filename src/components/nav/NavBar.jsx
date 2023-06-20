import './navBar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from "react-icons/fa";

function NavBar() {
    return (
        <nav className='navContainer'>

            <ul>
                <li className='logo'>
                    <h2>Logo</h2>
                </li>
                <li>
                    <Link o={"/"}>Home</Link>
                </li>
                <li>
                    <Link o={"/"}>About</Link>
                </li>
                <li>
                    <Link o={"/"}>Shop</Link>
                </li>
                <li>
                    <Link o={"/"}>News</Link>
                </li>
            </ul>
            <div className='navMenuButton'>
                <input type="text" />
                <div className='searchButton'>

                    <FaSearch />
                </div>
                <div className='cardButton'>
                    <FaShoppingCart />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

