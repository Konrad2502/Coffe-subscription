import './Popup.scss';

import React from 'react'

export default function Popup({handlePopup,isPopupOpen,selectedOptions,price}) {
  return (
    <div 
    onClick={() => handlePopup(false)}
    className={`popup-overlay ${isPopupOpen ? 'popup-overlay--visible' : ''}`}>
    <div className={`popup ${isPopupOpen ? 'popup--visible' : ''}`}>
    <div className="popup__title">
      <p className="popup__title-header">Order Summary</p>
    </div>
    <div className="popup__content">
      <p className="popup__content-summary">
      " I drink my coffee as <span>{selectedOptions.drink }</span>, with a <span>{selectedOptions.bean}</span> type of bean. <span>{selectedOptions.quantity}</span> graund ale <span>{selectedOptions.drink === 'Capsule' ? 'not applicable' : selectedOptions.grind}</span>, sent to me <span>{selectedOptions.delivery}</span> "
      </p>
      <p className="popup__content-description">
        Is this correct? You can proceed to checkout or go back to plan selection if something 
        is off. Subscription discount codes can also be redeemed at the checkout.
      </p>
    </div>
    <div className="popup__price">
      <div className="popup__price-number">
        ${price}/mo
      </div>
      <button 
      onClick={() => handlePopup(false)}
      className="popup__price-btn">Checkout</button>
    </div>
  </div>
  </div>
  )
}
