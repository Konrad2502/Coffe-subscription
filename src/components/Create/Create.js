import React from 'react';
import './Create.scss';
import CreateHeader from '../CreateHeader/CreateHeader';
import CreateProcess from '../CreateProcess/CreateProcess';
import Coffee from '../Coffee/Coffee';

export default function Create() {
  return (
    <div className='create'>
        <CreateHeader/>
        <CreateProcess/>
        <Coffee/>
    </div>
  )
}
