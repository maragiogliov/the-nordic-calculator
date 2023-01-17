import React, { useState } from 'react';


import { Button } from '@carbon/react';
import { DatePicker, DatePickerInput } from '@carbon/react';
import { Dropdown } from '@carbon/react';
import { Link } from 'react-router-dom';
import {Home} from '@carbon/react/icons';
import { PlanePrivate } from '@carbon/react/icons';
import {Car} from '@carbon/react/icons';
import {Scooter} from '@carbon/react/icons';
import {Bus} from '@carbon/react/icons';
import {Add} from '@carbon/react/icons';
import { ChartLineData } from '@carbon/react/icons';
import { useSelector } from 'react-redux';


const WelcomePage = () => {
  const selectedCountry = useSelector(state => state.selectedCountry);

    const handleSelectedCountry = (selectedCountry) => {
        //dispatch an action to set the selected country
    };

  return <>
    <section className='frame-calculator'>
    {/* ------------------------------------------------------------------- */}
        <div className='block-top'>
        <div className='progress-bar-container'>
    <Home
    className='iconClass'
    size='32px' />
    <PlanePrivate
    className='iconClass'
    size='32px'
    />
    <Car
     className='iconClass'
    size='32px'
    />
     <Scooter
      className='iconClass'
    size='32px'
    />
     <Bus
      className='iconClass'
    size='32px'
    />
     <Add
    className='iconClass'
    size='32px'
    />
    <ChartLineData
    className='iconClass'
    size='32px'
    />

  </div>
          <div className='title'>
            <h1>Welcome to the Nordic Waves </h1>
            <h1>Carbon Footprint Calculator </h1>
          </div>
        </div>
    {/* ------------------------------------------------------------------- */}

   

 
  



    {/* ------------------------------------------------------------------- */}
      <div className='block-bottom'>
        <h5 className='block-bottom-top'>With your calculation, you can offset your emissions through one of our climate-friendly projects.</h5>
        <div className='navigation-container'>
        <Link to="/house">
          <Button 
           
           className="navigation-content">Next</Button>
        </Link>
        </div>
      </div>
   </section>

 
  </>;

};

export default WelcomePage;