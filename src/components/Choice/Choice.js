import React from 'react';
import './Choice.scss';

export default function Choice() {
  return (
    <div className='choice'>
        <div className="choice__header">
            <h2 className='choice__header-title'>Why choose us?</h2>
            <p className="choice__header-description">
                A large part of our role is choosing which particular coffees will be featured 
                in our range. This means working closely with the best coffee growers to give 
                you a more impactful experience on every level.
            </p>
        </div>
        <div className="choice__list">
            <div className="choice__item">
                <img src="/assets/home/desktop/icon-coffee-bean.svg" alt="choice-icon" className="choice__item-img" />
                <h3 className="choice__item-title">Best quality</h3>
                <p className="choice__item-description">
                    Discover an endless variety of the world’s best artisan coffee from each of our roasters.
                </p>
            </div>
            <div className="choice__item">
                <img src="/assets/home/desktop/icon-gift.svg" alt="choice-icon" className="choice__item-img" />
                <h3 className="choice__item-title">Exclusive benefits</h3>
                <p className="choice__item-description">
                    Special offers and swag when you subscribe, including 30% off your first shipment.
                </p>
            </div>
            <div className="choice__item">
                <img src="/assets/home/desktop/icon-truck.svg" alt="choice-icon" className="choice__item-img" />
                <h3 className="choice__item-title">Free shipping</h3>
                <p className="choice__item-description">
                    We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
                </p>
            </div>
        </div>
    </div>
  )
}
