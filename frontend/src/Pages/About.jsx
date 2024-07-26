import React from 'react'
import './CSS/About.css'
import Image from '../Components/Assets/cs2banner.png'

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <img src={Image} alt="Knife" className="about-image" />
        <p>At Knifex, we offer the best CS:GO knife skins <br />to elevate your gaming experience.<br />Discover your perfect blade today! <br /> No refund, All sales are final.</p>
      </div>
    </div>
  )
}
export default About
