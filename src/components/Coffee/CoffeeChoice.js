import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


export default function CoffeeChoice({title,options,isOpen,handleToggle,selectedKey,handleOptionSelect, sectionRef,price }) {
  return (
    <div className="coffee__choice" ref={sectionRef}>
              <div className="coffee__title">
                <h3 className='coffee__title-name'>
                  {title}
                </h3>
                <div 
                className={`coffee__title-arrow ${
                isOpen ? 'coffee__title-arrow--twist' : '' }`}
                onClick={handleToggle}
                >
                  <FontAwesomeIcon icon={faAngleUp} />
                </div>
              </div>
              <div className={`coffee__elements ${
                  isOpen ? 'coffee__elements--hidden' : ''
                }`}>
                    {options.map(option => (
                         <div
                         className={`coffee__option ${selectedKey === option.key ? 'coffee__option--active' : ''}`} 
                         onClick={() => handleOptionSelect(option.key)}
                         >
                           <h4 className="coffee__option-title">
                             {option.title}
                           </h4>
                           <p className="coffee__option-description">
                             {price && `  $${price[option.key].toFixed(2)} per shipment`}
                             {option.description}
                           </p> 
                         </div>
                    ))}
              </div>
            </div>
  )
}
