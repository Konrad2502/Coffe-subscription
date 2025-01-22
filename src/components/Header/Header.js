import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
            <div className="header__content">
                <h2 className="header__content-title">
                    Great coffe made simple
                </h2>
                <p className="header__content-description">
                Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                coffees from our best roasters delivered directly to your door, at your schedule.
                </p>
                <button className="header__content-button">Create your plan</button>
            </div>
        </div>
  )
}
