import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {setElectricity,setFootprint } from "../../redux/carbon";

import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import IconsNavigation from '../IconsNavigation/IconsNavigation';
import countryFactors from '../../countryFactors'


const HousePage = () => {
  const { selectedCountry, transportation, electricity, waste, footprint } = useSelector(
    (state) => state.carbon
  );
  const dispatch = useDispatch();
  const [userElectricityFactor, setUserElectricityFactor] = useState(null);

  const handleUserElectricityChange = (e) => {
    setUserElectricityFactor(parseFloat(e.target.value));
    dispatch(setUserElectricityFactor(parseFloat(e.target.value)));
  };

  // function to handle input changes

  const handleElectricityChange = (e) => {
    dispatch(setElectricity(parseFloat(e.target.value)));
  };


  const calculateFootprint = () => {
    if (
      isNaN(parseFloat(transportation)) ||
      isNaN(parseFloat(electricity)) ||
      isNaN(parseFloat(waste))
    ) {
      dispatch(setFootprint("Please enter a valid number."));
    } else {
      let total =
        parseFloat(transportation) +
        parseFloat(electricity) * (userElectricityFactor || countryFactors[selectedCountry].electricity_factor);
      total +=
        parseFloat(waste) * countryFactors[selectedCountry].food_waste_factor;
      dispatch(setFootprint(total.toFixed(2)));
    }
  };
  return <>
    <section className='frame-calculator'>
    {/* ------------------------------------------------------------------- */}
        <div className='block-top'>
        <div className='progress-bar-container'>
        <IconsNavigation />


  </div>
          <div className='title'>
            <h1>House </h1>
           
          </div>
        </div>
    {/* ------------------------------------------------------------------- */}
    <div>
 

    <br />
    <label>
      Electricity:{" "}
      <input
        type="number"
        value={electricity || ""}
        onChange={handleElectricityChange}
        />
      </label>
      <br />
      <label>
        Electricity Factor:{" "}
        <input
          type="number"
          value={userElectricityFactor !== null 
          ? userElectricityFactor 
          : countryFactors[selectedCountry].electricity_factor || ""}
          onChange={handleUserElectricityChange}
        />
        kgCO2e/kWh
      </label>
      <button onClick={calculateFootprint}>Calculate</button>
      <h1>{footprint}</h1>
    </div>
    {/* ------------------------------------------------------------------- */}
      <div className='block-bottom'>
        <h5 className='block-bottom-top'>With your calculation, you can offset your emissions through one of our climate-friendly projects.</h5>
        <div className='navigation-container'>
        <Link to="/welcome">
          <Button className="navigation-content">Previous</Button>
        </Link>
        <Link to="/flight">
          <Button className="navigation-content">Next</Button>
        </Link>
        </div>
      </div>
   </section>

 
  </>;

};

export default HousePage;