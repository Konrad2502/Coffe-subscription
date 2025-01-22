import React from 'react';
import Icon from '../../assets/icon-coffee-bean.svg';
import './Nav.scss';

export default function Nav() {
  return (
    <div className='nav'>
        <div className="nav__logo">
            <img className='nav__logo-img' src={Icon} alt="Logo icon" />
            <h3 className='nav__logo-title'>cofferoaster</h3>
        </div>
        <ul className="nav__list">
            <li className="nav__list-item">home</li>
            <li className="nav__list-item">about as</li>
            <li className="nav__list-item">create your plan</li>
        </ul>
    </div>
  )
}
