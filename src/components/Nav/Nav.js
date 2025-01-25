import React from 'react';
import Icon from '../../assets/icon-coffee-bean.svg';
import './Nav.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav'>
        <div className="nav__logo">
            <img className='nav__logo-img' src={Icon} alt="Logo icon" />
            <h3 className='nav__logo-title'>cofferoaster</h3>
        </div>
        <ul className="nav__list">
            <Link to='/' className="nav__list-item">home</Link>
            <Link to='/about' className="nav__list-item">about as</Link>
            <Link to='create' className="nav__list-item">create your plan</Link>
        </ul>
    </div>
  )
}
 