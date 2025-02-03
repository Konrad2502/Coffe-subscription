import React from 'react'

export default function CoffeeSummary({handlePopup,selectedOptions}) {
  return (
    <div className="coffee__summary">
    <div className="coffee__content">
        <div className="coffee__content-title">order summary</div>
        <div className="coffee__content-description">
            " I drink my coffee as <span>{selectedOptions.drink }</span>, with a <span>{selectedOptions.bean}</span> type of bean. <span>{selectedOptions.quantity}</span> graund ale <span>{selectedOptions.drink === 'Capsule' ? 'not applicable' : selectedOptions.grind}</span>, sent to me <span>{selectedOptions.delivery}</span> "
        </div>
    </div>
    <button 
    onClick={() => handlePopup(true)}
    className="coffee__summary-button">
        Create my plan
    </button>
  </div>
  )
}
