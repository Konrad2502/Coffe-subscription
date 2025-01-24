import React from 'react';
import './Quality.scss';

export default function Quality() {
  return (
    <div className='quality'>
        <div className="quality__content">
            <h2 className="quality__content-title">
                Uncompromising quality
            </h2>
            <p className="quality__content-description">
                Although we work with growers who pay close attention to all stages of harvest and processing, 
                we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the 
                coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast 
                consistent, user-friendly coffee, so that brewing is easy and enjoyable.
            </p>
        </div>
        <div className="quality__picture">
            <img src="/assets/about/desktop/image-quality.jpg" alt="quality-img" className="quality__picture-img" />
        </div>
    </div>
  )
}
