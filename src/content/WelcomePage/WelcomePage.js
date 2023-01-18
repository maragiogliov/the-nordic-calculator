import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectCountry } from "../../redux/carbon";
import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import IconsNavigation from '../IconsNavigation/IconsNavigation'


const countries = ["USA", "Canada", "Mexico", "France", "Germany"];


const WelcomePage = () => {
  const { selectedCountry } = useSelector(
    (state) => state.carbon
  );
  const dispatch = useDispatch();
  const handleCountryChange = (e) => {
    dispatch(selectCountry(e.target.value));
  };

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
    <h3>Select a country to start your calculation</h3>
      <label>
        Country:
        <select value={selectedCountry} onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
           
   

    
  



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