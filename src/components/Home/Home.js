import React from 'react';
import './Home.scss';
import Choice from '../Choice/Choice';
import Process from '../Process/Process';
import Collection from '../Collection/Collection';
import Header from '../Header/Header';

export default function Home() {
  return (
    <div className='home'>
        <Header/>   
        <Collection/>   
        <Choice/>
        <Process/>
    </div>
  )
}
