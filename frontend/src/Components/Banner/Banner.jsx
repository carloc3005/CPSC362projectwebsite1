import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../Assets/cs2banner.png';
import './Banner.css';

export const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-img-container'>
        <img src={banner} alt="CS2 Banner" className='banner-img' />
      </div>
      <div className='banner-content'>
        <h2 className='banner-title'>BUY & SELL</h2>
        <p className='banner-subtitle'>CS2 Skins</p>
        <Link to='./knives' className='banner-button-link'>
          <button className='banner-button'>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
