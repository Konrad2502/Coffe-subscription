import React from 'react';
import './CreateProcess.scss';

export default function CreateProcess() {
  return (
    <div className='create-process'>
        <div className="create-process__img">
            <div className="create-process__img-circle"></div>
            <div className="create-process__img-line"></div>
            <div className="create-process__img-circle"></div>
            <div className="create-process__img-line"></div>
            <div className="create-process__img-circle"></div>
        </div>
        <div className="create-process__list">
            <div className="create-process__item">
                <h3 className="create-process__item-number">01</h3>
                <h4 className="create-process__item-title">Pick your coffee</h4>
                <p className="create-process__item-description">
                    Select from our evolving range of artisan coffees. Our beans are ethically 
                    sourced and we pay fair prices for them. There are new coffees in all profiles 
                    every month for you to try out.
                </p>
            </div>
            <div className="create-process__item">
                <h3 className="create-process__item-number">02</h3>
                <h4 className="create-process__item-title"> Choose the frequency</h4>
                <p className="create-process__item-description">
                    Customize your order frequency, quantity, even your roast style and grind type. 
                    Pause, skip or cancel your subscription with no commitment through our online portal.
                </p>
            </div>
            <div className="create-process__item">
                <h3 className="create-process__item-number">03</h3>
                <h4 className="create-process__item-title">Receive and enjoy!</h4>
                <p className="create-process__item-description">
                    We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                    world-class coffees curated to provide a distinct tasting experience.
                </p>
            </div>
        </div>
    </div>
  )
}
