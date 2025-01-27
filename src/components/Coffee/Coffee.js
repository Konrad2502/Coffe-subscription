import React from 'react';
import './Coffee.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useState } from 'react';

export default function Coffee() {

  const [activeLink, setActiveLink] = useState('');
  const [toggleState, setToggleState] = useState({
    preferences: false,
    beanType: false,
    quantity: false,
    grindOption: false,
    deliveries: false,
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
    console.log(section)
  };

  return (
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
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                Capsule
              </h4>
              <p className="coffee__option-description">
                Compatible with Nespresso systems and similar brewers
              </p>
            </div>
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                Filter
              </h4>
              <p className="coffee__option-description">
                For pour over or drip methods like Aeropress, Chemex, and V60
              </p>
            </div>
            <div className="coffee__option">
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
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                Single origin
              </h4>
              <p className="coffee__option-description">
                Distinct, high quality coffee from a specific family-owned farm
              </p>
            </div>
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                Decaf
              </h4>
              <p className="coffee__option-description">
                Just like regular coffee, except the caffeine has been removed
              </p>
            </div>
            <div className="coffee__option">
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
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                250g
              </h4>
              <p className="coffee__option-description">
                Perfect for the solo drinker. Yields about 12 delicious cups
              </p>
            </div>
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                500g
              </h4>
              <p className="coffee__option-description">
                Perfect option for a couple. Yields about 40 delectable cups.
              </p>
            </div>
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                1000g
              </h4>
              <p className="coffee__option-description">
                Perfect for offices and events. Yields about 90 delightful cups.
              </p>
            </div>
          </div>
        </div>
        <div className="coffee__choice" ref={grindOptionRef}>
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
          <div className={`coffee__elements ${
              toggleState.grindOption ? 'coffee__elements--hidden' : ''
            }`}>
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                Wholebean
              </h4>
              <p className="coffee__option-description">
                Best choice if you cherish the full sensory experience
              </p>
            </div>
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                Filter
              </h4>
              <p className="coffee__option-description">
                For drip or pour-over coffee methods such as V60 or Aeropress
              </p>
            </div>
            <div className="coffee__option">
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
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                Every week
              </h4>
              <p className="coffee__option-description">
                $14.00 per shipment. Includes free first-class shipping.
              </p>
            </div>
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                Every 2 weeks
              </h4>
              <p className="coffee__option-description">
                $17.25 per shipment. Includes free priority shipping.
              </p>
            </div>
            <div className="coffee__option">
              <h4 className="coffee__option-title">
                Every month
              </h4>
              <p className="coffee__option-description">
                $22.50 per shipment. Includes free priority shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

