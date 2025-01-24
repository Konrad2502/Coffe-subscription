import React from 'react';
import './Headquarters.scss';

export default function Headquarters() {
  return (
    <div className='headquarters'>
        <h4 className="headquarters__header">
            Our headquarters
        </h4>
        <div className="headquarters__content">
            <div className="headquarters__item">
                <img src="/assets/about/desktop/illustration-uk.svg" alt="headquarters-img" className="headquarters__item-img" />
                <h3 className="headquarters__item-title">
                    United Kingdom
                </h3>
                <div className="headquarters__item-description">
                    <p> 68 Asfordby Rd</p>
                    <p> Alcaston</p>
                    <p> Alcaston</p>
                    <p> +44 1241 918425</p>
                </div>
            </div>
            <div className="headquarters__item">
                <img src="/assets/about/desktop/illustration-canada.svg" alt="headquarters-img" className="headquarters__item-img" />
                <h3 className="headquarters__item-title">
                    Canada
                </h3>
                <div className="headquarters__item-description">
                    <p>1528 Eglinton Avenue</p>
                    <p> Toronto</p>
                    <p> Ontario M4P 1A6</p>
                    <p> +1 416 485 2997</p>
                </div>
            </div>
            <div className="headquarters__item">
                <img src="/assets/about/desktop/illustration-australia.svg" alt="headquarters-img" className="headquarters__item-img" />
                <h3 className="headquarters__item-title">
                    Australia
                </h3>
                <div className="headquarters__item-description">
                    <p>36 Swanston Street</p>
                    <p>Kewell</p>
                    <p>Victoria</p>
                    <p>+61 4 9928 3629</p>
                </div>
            </div>
        </div>
    </div>
  )
}
