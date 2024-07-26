import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import shopping_cart from '../Assets/shopping-cart.png';
import Dropdown from '../Dropdown/Dropdown';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const onMouseEnter = () => {
        setDropdown(true);
    };
    const onMouseLeave = () => {
        setDropdown(false);
    };

    const { getTotalCartItems } = useContext(ShopContext);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/'> <img width='120' src={logo} alt='' /></Link>
            </div>
            <ul className="nav-menu">
                <li> <Link style={{ textDecoration: 'None', color: 'white' }} to='/'> Home </Link></li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link style={{ textDecoration: 'None', color: 'white' }} to='/knives'>Knives </Link> {dropdown && <Dropdown />}</li>
                <li> <Link style={{ textDecoration: 'None', color: 'white' }} to='/login'>Sell </Link></li>
                <li> <Link style={{ textDecoration: 'None', color: 'white' }} to='/about'>About </Link></li>
            </ul>
            <div className="nav-search">
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search for knives..."
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="nav-login-cart">
                <Link style={{ textDecoration: 'None' }} to='/login'><button>Login</button></Link>
                <Link style={{ textDecoration: 'None' }} to='/cart'><img src={shopping_cart} alt="cart" /></Link>
                <div className="nav-cart-count"> {getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
