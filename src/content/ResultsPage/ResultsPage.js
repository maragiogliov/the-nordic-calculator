import React from 'react';
import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';

import IconsNavigation from '../IconsNavigation/IconsNavigation'



const ResultsPage = () => {
  return <>
    <section className='frame-calculator'>
    {/* ------------------------------------------------------------------- */}
        <div className='block-top'>
  <div className='progress-bar-container'>
  <IconsNavigation />


  </div>
          <div className='title'>
            <h1>Results </h1>
      

          </div>
        </div>
    {/* ------------------------------------------------------------------- */}

    {/* ------------------------------------------------------------------- */}
      <div className='block-bottom'>
        <h5 className='block-bottom-top'>With your calculation, you can offset your emissions through one of our climate-friendly projects.</h5>
        <div className='navigation-container'>
        <Link to="/secondary">
          <Button className="navigation-content">Previous</Button>
        </Link>
        <Link to="/welcome">
          <Button className="navigation-content">Start Again</Button>
        </Link>
       
        </div>
      </div>
   </section>

 
  </>;

};

export default ResultsPage;