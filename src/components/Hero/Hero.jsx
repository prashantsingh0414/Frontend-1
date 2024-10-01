import React from 'react'
import arrow_icon from '../Assets/arrow.png'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
import './Hero.css'
export default function Hero() {
  return (
<div className='hero'>
<div className="hero-left">
<h2> <b>New Arrival Only</b></h2>
<div >
    <div className="hand-hand-icon">
    <p><b>New</b></p>
    
        <img src={hand_icon} alt=""/>
        <br/>
        <p><b>collections</b></p>
        
        <p><b>for everyone</b></p>
    </div>
   
</div>
<div className="hero-latest-btn">
    <div>Latest Collection</div>
    <img src={arrow_icon} alt=""/>
</div>
</div>
<div className="hero-right">
<img src={hero_image} alt=""/>
</div>
    </div>
  )
}
