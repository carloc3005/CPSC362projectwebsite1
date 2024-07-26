import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import twitter from '../Assets/Socials/twittericon.png'
import facebook from '../Assets/Socials/facebookicon.png'
import instagram from '../Assets/Socials/instagramicon.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} width='200' />
        </div>
        <ul className="footer-links">
            <li><Link style={{textDecoration: 'None', color:'white'}}to='./' >Shop</Link></li>
            <li><Link style={{textDecoration: 'None', color:'white'}}to='./knives'>Knives </Link></li>
            <li><Link style={{textDecoration: 'None', color:'white'}}to='./About'>About</Link></li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram} alt=""/> 
            </div>
            <div className="footer-icons-container">
                <img src={facebook} alt=""/> 
            </div>
            <div className="footer-icons-container">
                <img src={twitter} alt=""/> 
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>

    </div>
  )
}
export default Footer;
