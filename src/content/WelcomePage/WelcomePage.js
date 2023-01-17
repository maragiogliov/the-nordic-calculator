import React, { useState } from 'react';
import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import IconsNavigation from '../IconsNavigation/IconsNavigation'
import CalculatorTest from '../CalculatorTest/CalculatorTest'




const WelcomePage = () => {


  return <>
    <section className='frame-calculator'>
    {/* ------------------------------------------------------------------- */}
        <div className='block-top'>
        <div className='progress-bar-container'>
        <IconsNavigation />

  </div>
          <div className='title'>
            <h1>Welcome to the Nordic Waves </h1>
            <h1>Carbon Footprint Calculator </h1>
          </div>
        </div>
    {/* ------------------------------------------------------------------- */}

   

    <CalculatorTest />
  



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