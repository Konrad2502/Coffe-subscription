import React from 'react';
import './Collection.scss';

export default function Collection() {
  return (
    <div className="collection">
    <div className="collection__items">
        <img className='collection__items-img' src="/assets/home/desktop/image-gran-espresso.png" alt="collection-img" />
        <h4 className='collection__items-title'>Gran Expresso</h4>
        <p className='collection__items-description'>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
    </div>
    <div className="collection__items">
    <img className='collection__items-img' src="/assets/home/desktop/image-planalto.png" alt="collection-img" />
        <h4 className='collection__items-title'>Planalto</h4>
        <p className='collection__items-description'>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
    </div>
    <div className="collection__items">
    <img className='collection__items-img' src="/assets/home/desktop/image-piccollo.png" alt="collection-img" />
        <h4 className='collection__items-title'>Piccollo</h4>
        <p className='collection__items-description'> Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
    </div>
    <div className="collection__items">
    <img className='collection__items-img' src="/assets/home/desktop/image-danche.png" alt="collection-img" />
        <h4 className='collection__items-title'>Danche</h4>
        <p className='collection__items-description'>Ethiopian hand-harvested blend densely packed with vibrant fruit notes
        </p>
    </div>
    <p className="collection__logo">our collection</p>
</div>
  )
}
