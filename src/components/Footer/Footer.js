import React from 'react';
import './Footer.scss';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Icon from '../../assets/icon-coffee-bean.svg';

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer__logo">
            <img src={Icon} alt="" className="footer__logo-img" />
            <h4 className="footer__logo-title">cofferoaster</h4>
        </div>
        <div className="footer__list">
            <div className="footer__list-item">Home</div>
            <div className="footer__list-item">About us</div>
            <div className="footer__list-item">Create your plan</div>
        </div>
        <div className="footer__icons">
            <FaFacebook className='footer__icons-item'/>
            <FaInstagram className='footer__icons-item' />
            <FaTwitter className='footer__icons-item'/>
        </div>
    </div>
  )
}
