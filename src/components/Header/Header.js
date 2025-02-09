import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';

export default function Header() {

const navigate = useNavigate();

const handleNavigation = () => {
  navigate('/create');
};

  return (
    <div className="header">
            <div className="header__content">
                <h2 className="header__content-title">
                    Great coffee made simple
                </h2>
                <p className="header__content-description">
                Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                coffees from our best roasters delivered directly to your door, at your schedule.
                </p>
                <button onClick={handleNavigation} className="header__content-button">Create your plan</button>
            </div>
        </div>
  )
}
