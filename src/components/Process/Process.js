import './Process.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Process() {

const navigate = useNavigate();
    
const handleNavigation = () => {
      navigate('/create');
    };

  return (
    <div className='process'>
        <div className="process__title">How it works?</div>
        <div className="process__img">
            <div className="process__img-circle"></div>
            <div className="process__img-line"></div>
            <div className="process__img-circle"></div>
            <div className="process__img-line"></div>
            <div className="process__img-circle"></div>
        </div>
        <div className="process__list">
            <div className="process__item">
                <h3 className="process__item-number">01</h3>
                <h4 className="process__item-title">Pick your coffe</h4>
                <p className="process__item-description">
                    Select from our evolving range of artisan coffees. Our beans are ethically 
                    sourced and we pay fair prices for them. There are new coffees in all profiles 
                    every month for you to try out.
                </p>
            </div>
            <div className="process__item">
                <h3 className="process__item-number">02</h3>
                <h4 className="process__item-title"> Choose the frequency</h4>
                <p className="process__item-description">
                    Customize your order frequency, quantity, even your roast style and grind type. 
                    Pause, skip or cancel your subscription with no commitment through our online portal.
                </p>
            </div>
            <div className="process__item">
                <h3 className="process__item-number">03</h3>
                <h4 className="process__item-title">Receive and enjoy!</h4>
                <p className="process__item-description">
                    We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                    world-class coffees curated to provide a distinct tasting experience.
                </p>
            </div>
        </div>
        <button onClick={handleNavigation} className="process__button">Create your plan</button>
    </div>
  )
}
