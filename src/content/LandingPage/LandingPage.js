import React from 'react';
import { Link } from "react-router-dom";
import Button from '@carbon/react/lib/components/Button/Button';

const oceanPicture = new URL ("../../assets/Ocean.png",import.meta.url)


const LandingPage = () => {
  return <>
        <section className='main-container'>
            LANDING PAGE
          <div className='ocean-picture'>
            <img src={oceanPicture}/>
          </div>
         
            <Link to="/welcome">
              <Button>Next</Button>
            </Link>
        </section>
          </>
};

export default LandingPage;

