import React from 'react';
import './Coffee.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useState } from 'react';

export default function Coffee() {

  const prices = {
    '250g': { 'Every week': 7.2, 'Every 2 weeks': 9.6, 'Every month': 12.0 },
    '500g': { 'Every week': 13.0, 'Every 2 weeks': 17.5, 'Every month': 22.0 },
    '1000g': { 'Every week': 22.0, 'Every 2 weeks': 32.0, 'Every month': 42.0 }
  };

 

  const [activeLink, setActiveLink] = useState('');
  const [toggleState, setToggleState] = useState({
    preferences: false,
    beanType: false,
    quantity: false,
    grindOption: false,
    deliveries: false,
  });

  const [selectedOptions, setSelectedOptions] = useState({
    drink: 'Filter',
    bean: 'Decaf',
    quantity: '250g',
    grind: 'Cafetière',
    delivery: 'Every week',
  });


  const preferencesRef = useRef(null);
  const beanTypeRef = useRef(null);
  const quantityRef = useRef(null);
  const grindOptionRef = useRef(null);
  const deliveriesRef = useRef(null);


  
  const scrollToSection = (ref, linkName) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveLink(linkName)
  };

  const handleToggle = (section) => {
    setToggleState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleOptionSelect = (key, value) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [key]: value
    }));
  };

  return (
    <>
    <div className='coffee'>
      <ul className="coffee__list">
        <li 
        className={`coffee__item ${activeLink === 'preferences' ? 'coffee__item--active' : ''}`} 
        onClick={() => scrollToSection(preferencesRef,'preferences')}
        >
          <h4 className="coffee__item-number">
            01
          </h4>
          <p className="coffee__item-name">
            Preferences
          </p>
        </li>
        <li 
        className={`coffee__item ${activeLink === 'beantype' ? 'coffee__item--active' : ''}`} 
        onClick={() => scrollToSection(beanTypeRef,'beantype')}
        >
          <h4 className="coffee__item-number">
            02
          </h4>
          <p className="coffee__item-name">
            Bean type
          </p>
        </li>
        <li 
        className={`coffee__item ${activeLink === 'quantity' ? 'coffee__item--active' : ''}`} 
        onClick={() => scrollToSection(quantityRef,'quantity')}
        >
          <h4 className="coffee__item-number">
            03
          </h4>
          <p className="coffee__item-name">
            Quantity
          </p>
        </li>
        <li 
        className={`coffee__item ${activeLink === 'grindoption' ? 'coffee__item--active' : ''}`} 
        onClick={() => scrollToSection(grindOptionRef,'grindoption')}
        >
          <h4 className="coffee__item-number">
            04
          </h4>
          <p className="coffee__item-name">
            Grind option
          </p>
        </li>
        <li 
        className={`coffee__item ${activeLink === 'deliveries' ? 'coffee__item--active' : ''}`} 
        onClick={() => scrollToSection(deliveriesRef,'deliveries')}
        >
          <h4 className="coffee__item-number">
            05
          </h4>
          <p className="coffee__item-name">
            Deliveries
          </p>
        </li>
      </ul>
      <div className="coffee__process">
        <div className="coffee__choice" ref={preferencesRef}>
          <div className="coffee__title">
            <h3 className='coffee__title-name'>
              How do you drink your coffee?
            </h3>
            <div 
            className={`coffee__title-arrow ${
            toggleState.preferences ? 'coffee__title-arrow--twist' : '' }`}
            onClick={() => handleToggle('preferences')}
            >
              <FontAwesomeIcon icon={faAngleUp} />
            </div>
          </div>
          <div className={`coffee__elements ${
              toggleState.preferences ? 'coffee__elements--hidden' : ''
            }`}>
            <div
            className={`coffee__option ${selectedOptions.drink === 'Capsule' ? 'coffee__option--active' : ''}`} 
            onClick={() => handleOptionSelect('drink', 'Capsule')}
            >
              <h4 className="coffee__option-title">
                Capsule
              </h4>
              <p className="coffee__option-description">
                Compatible with Nespresso systems and similar brewers
              </p>
            </div>
            <div 
            className={`coffee__option ${selectedOptions.drink === 'Filter' ? 'coffee__option--active' : ''}`} 
            onClick={() => handleOptionSelect('drink', 'Filter')}
            >
              <h4 className="coffee__option-title">
                Filter
              </h4>
              <p className="coffee__option-description">
                For pour over or drip methods like Aeropress, Chemex, and V60
              </p>
            </div>
            <div 
            className={`coffee__option ${selectedOptions.drink === 'Espresso' ? 'coffee__option--active' : ''}`} 
            onClick={() => handleOptionSelect('drink', 'Espresso')}
            >
              <h4 className="coffee__option-title">
                Espresso
              </h4>
              <p className="coffee__option-description">
                Dense and finely ground beans for an intense, flavorful experience
              </p>
            </div>
          </div>
        </div>
        <div className="coffee__choice" ref={beanTypeRef}>
          <div className="coffee__title">
            <h3 className='coffee__title-name'>
              What type of coffee?
            </h3>
            <div className={`coffee__title-arrow ${
            toggleState.beanType ? 'coffee__title-arrow--twist' : '' }`}
            onClick={() => handleToggle('beanType')}>
              <FontAwesomeIcon icon={faAngleUp} />
            </div>
          </div>
          <div className={`coffee__elements ${
              toggleState.beanType ? 'coffee__elements--hidden' : ''
            }`}>
            <div
             className={`coffee__option ${selectedOptions.bean === 'Single origin' ? 'coffee__option--active' : ''}`} 
             onClick={() => handleOptionSelect('bean', 'Single origin')}
            >
              <h4 className="coffee__option-title">
                Single origin
              </h4>
              <p className="coffee__option-description">
                Distinct, high quality coffee from a specific family-owned farm
              </p>
            </div>
            <div 
             className={`coffee__option ${selectedOptions.bean === 'Decaf' ? 'coffee__option--active' : ''}`} 
             onClick={() => handleOptionSelect('bean', 'Decaf')}
            >
              <h4 className="coffee__option-title">
                Decaf
              </h4>
              <p className="coffee__option-description">
                Just like regular coffee, except the caffeine has been removed
              </p>
            </div>
            <div
             className={`coffee__option ${selectedOptions.bean === 'Blended' ? 'coffee__option--active' : ''}`} 
             onClick={() => handleOptionSelect('bean', 'Blended')}
            >
              <h4 className="coffee__option-title">
                Blended
              </h4>
              <p className="coffee__option-description">
                Combination of two or three dark roasted beans of organic coffees
              </p>
            </div>
          </div>
        </div>
        <div className="coffee__choice" ref={quantityRef}>
          <div className="coffee__title">
            <h3 className='coffee__title-name'>
              How much would you like?
            </h3>
            <div className={`coffee__title-arrow ${
            toggleState.quantity ? 'coffee__title-arrow--twist' : '' }`}
            onClick={() => handleToggle('quantity')}>
              <FontAwesomeIcon icon={faAngleUp} />
            </div>
          </div>
          <div className={`coffee__elements ${
              toggleState.quantity ? 'coffee__elements--hidden' : ''
            }`}>
            <div 
             className={`coffee__option ${selectedOptions.quantity === '250g' ? 'coffee__option--active' : ''}`} 
             onClick={() => handleOptionSelect('quantity', '250g')}
            >
              <h4 className="coffee__option-title">
                250g
              </h4>
              <p className="coffee__option-description">
                Perfect for the solo drinker. Yields about 12 delicious cups
              </p>
            </div>
            <div 
             className={`coffee__option ${selectedOptions.quantity === '500g' ? 'coffee__option--active' : ''}`} 
             onClick={() => handleOptionSelect('quantity', '500g')}
            >
              <h4 className="coffee__option-title">
                500g
              </h4>
              <p className="coffee__option-description">
                Perfect option for a couple. Yields about 40 delectable cups.
              </p>
            </div>
            <div 
             className={`coffee__option ${selectedOptions.quantity === '1000g' ? 'coffee__option--active' : ''}`} 
             onClick={() => handleOptionSelect('quantity', '1000g')}
            >
              <h4 className="coffee__option-title">
                1000g
              </h4>
              <p className="coffee__option-description">
                Perfect for offices and events. Yields about 90 delightful cups.
              </p>
            </div>
          </div>
        </div>
        <div className='coffee__choice ' ref={grindOptionRef}>
          <div className="coffee__title">
            <h3 className='coffee__title-name'>
              Want us to grind them?
            </h3>
            <div className={`coffee__title-arrow ${
            toggleState.grindOption ? 'coffee__title-arrow--twist' : '' }`}
            onClick={() => handleToggle('grindOption')}>
              <FontAwesomeIcon icon={faAngleUp} />
            </div>
          </div>
          <div className={`coffee__elements 
            ${toggleState.grindOption ? 'coffee__elements--hidden' : ''}
            ${selectedOptions.drink === 'Capsule' ? 'coffee__elements--disable' : ''}`}>
            <div 
             className={`coffee__option ${selectedOptions.grind === 'Wholebean' ? 'coffee__option--active' : ''}`} 
             onClick={() => handleOptionSelect('grind', 'Wholebean')}
            >
              <h4 className="coffee__option-title">
                Wholebean
              </h4>
              <p className="coffee__option-description">
                Best choice if you cherish the full sensory experience
              </p>
            </div>
            <div 
             className={`coffee__option ${selectedOptions.grind === 'Filter' ? 'coffee__option--active' : ''}`} 
             onClick={() => handleOptionSelect('grind', 'Filter')}
           >
              <h4 className="coffee__option-title">
                Filter
              </h4>
              <p className="coffee__option-description">
                For drip or pour-over coffee methods such as V60 or Aeropress
              </p>
            </div>
            <div 
             className={`coffee__option ${selectedOptions.grind === 'Cafetière' ? 'coffee__option--active' : ''}`} 
             onClick={() => handleOptionSelect('grind', 'Cafetière')}
           >
              <h4 className="coffee__option-title">
                Cafetiére
              </h4>
              <p className="coffee__option-description">
                Course ground beans specially suited for french press coffee
              </p>
            </div>
          </div>
        </div>
        <div className="coffee__choice" ref={deliveriesRef}>
          <div className="coffee__title">
            <h3 className='coffee__title-name'>
              How often should we deliver?
            </h3>
            <div className={`coffee__title-arrow ${
            toggleState.deliveries ? 'coffee__title-arrow--twist' : '' }`}
            onClick={() => handleToggle('deliveries')}>
              <FontAwesomeIcon icon={faAngleUp} />
            </div>
          </div>
          <div className={`coffee__elements ${
              toggleState.deliveries ? 'coffee__elements--hidden' : ''
            }`}>
            <div 
            className={`coffee__option ${selectedOptions.delivery === 'Every week' ? 'coffee__option--active' : ''}`} 
            onClick={() => handleOptionSelect('delivery', 'Every week')}
            >
              <h4 className="coffee__option-title">
                Every week
              </h4>
              <p className="coffee__option-description">
              {`$${prices[selectedOptions.quantity]['Every week'].toFixed(2)} per shipment`}. Includes free first-class shipping.
              </p>
            </div>
            <div 
            className={`coffee__option ${selectedOptions.delivery === 'Every 2 weeks' ? 'coffee__option--active' : ''}`} 
            onClick={() => handleOptionSelect('delivery', 'Every 2 weeks')}
            >
              <h4 className="coffee__option-title">
                Every 2 weeks
              </h4>
              <p className="coffee__option-description">
              {`$${prices[selectedOptions.quantity]['Every 2 weeks'].toFixed(2)} per shipment`}. Includes free priority shipping.
              </p>
            </div>
            <div 
            className={`coffee__option ${selectedOptions.delivery === 'Every month' ? 'coffee__option--active' : ''}`} 
            onClick={() => handleOptionSelect('delivery', 'Every month')}
            >
              <h4 className="coffee__option-title">
                Every month
              </h4>
              <p className="coffee__option-description">
              {`$${prices[selectedOptions.quantity]['Every month'].toFixed(2)} per shipment`}. Includes free priority shipping.
              </p>
            </div>
          </div>
        </div>
        <div className="coffee__summary">
          <div className="coffee__content">
              <div className="coffee__content-title">order summary</div>
              <div className="coffee__content-description">
                  " I drink my coffee as <span>{selectedOptions.drink }</span>, with a <span>{selectedOptions.bean}</span> type of bean. <span>{selectedOptions.quantity}</span> graund ale <span>{selectedOptions.drink === 'Capsule' ? 'not applicable' : selectedOptions.grind}</span>, sent to me <span>{selectedOptions.delivery}</span> "
              </div>
          </div>
          <button className="coffee__summary-button">
              Create my plan
          </button>
        </div>
      </div>
    </div>
    <div className="popup">
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
        $14.00/mo
      </div>
      <button className="popup__price-btn">Checkout</button>
    </div>
  </div>
  </>
  )
}

