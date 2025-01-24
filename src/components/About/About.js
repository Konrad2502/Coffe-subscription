import React from 'react';
import './About.scss';
import Commitment from '../Commitment/Commitment';
import Quality from '../Quality/Quality';
import Headquarters from '../Headquarters/Headquarters';
import AboutHeader from '../AboutHeader/AboutHeader';


export default function About() {
  return (
    <div className="about">
      <AboutHeader/>
      <Commitment/>
      <Quality/>
      <Headquarters/>
    </div>
  )
}
