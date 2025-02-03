import React from 'react'

export default function CoffeItem({activeLink,scrollToSection,number,name}) {
  return (
    <li 
        className={`coffee__item ${activeLink ? 'coffee__item--active' : ''}`} 
        onClick={scrollToSection}
        >
          <h4 className="coffee__item-number">
            {number}
          </h4>
          <p className="coffee__item-name">
            {name}
          </p>
        </li>
  )
}
