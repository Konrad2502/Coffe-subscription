import React from 'react';
import './Coffee.scss';
import { useRef } from 'react';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import CoffeItem from './CoffeItem';
import CoffeeChoice from './CoffeeChoice';
import CoffeeSummary from './CoffeeSummary';
import { prices, coffeeItems, coffeeChoices } from '../../data';

export default function Coffee() {
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

  const [isPopupOpen, setIsPopupOpen] = useState(false);
 

  const preferencesRef = useRef(null);
  const beanTypeRef = useRef(null);
  const quantityRef = useRef(null);
  const grindOptionRef = useRef(null);
  const deliveriesRef = useRef(null);


  const sectionRefs = {
    preferences: preferencesRef,
    beantype: beanTypeRef,
    quantity: quantityRef,
    grindoption: grindOptionRef,
    deliveries: deliveriesRef
  };


  
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

  const handlePopup = (boolean) => {
    setIsPopupOpen(boolean)
  }

  
  return (
    <>
    <div className='coffee'>
      <ul className="coffee__list">
        {coffeeItems.map(item => (
          <CoffeItem
          key={item.key}
          activeLink={activeLink === item.key}
          scrollToSection={() => scrollToSection(sectionRefs[item.key], item.key)}
          number={item.number}
          name={item.name}
          />
        ))}
      </ul>
      <div className="coffee__process">
      {coffeeChoices.map(item => (
            <CoffeeChoice
              key={item.key}
              title={item.title}
              options={item.options}
              isOpen={toggleState[item.key]}
              handleToggle={() => handleToggle(item.key)}
              selectedKey={selectedOptions[item.mappedKey]}
              handleOptionSelect={(value) => handleOptionSelect(item.mappedKey, value)}
              sectionRef={sectionRefs[item.key]}
              price={item.key === 'deliveries' ? prices[selectedOptions.quantity] : null} 
         />
      ))}
       <CoffeeSummary
       handlePopup={handlePopup}
       selectedOptions={selectedOptions}
       />
      </div>
     <Popup
     handlePopup={handlePopup}
     isPopupOpen={isPopupOpen}
     selectedOptions={selectedOptions}
     price={prices[selectedOptions.quantity][selectedOptions.delivery]}
     />
    </div>
  </>
  )
}

