import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {setElectricity,setFootprint, setUserElectricityFactor } from "../../redux/carbon";

import { Button, TextInput } from '@carbon/react';
import { Link } from 'react-router-dom';
import IconsNavigation from '../IconsNavigation/IconsNavigation';
import countryFactors from '../../countryFactors'


const HousePage = () => {
  const { selectedCountry, transportation, electricity, waste, footprint} = useSelector(
    (state) => state.carbon
  );
  const dispatch = useDispatch();
  const {userElectricityFactor} = useSelector(state => state.carbon)

  // Declare the state variable for the number of people
  const [numPeople, setNumPeople] = useState(1);
  

  const handleNumPeopleChange = (e) => {
    setNumPeople(e.target.value);
  }

  const handleUserElectricityChange = (e) => {
    const factor = parseFloat(e.target.value);
    dispatch(setUserElectricityFactor(factor));
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
      let total = parseFloat(transportation) + (parseFloat(electricity) / parseFloat(numPeople)) * (userElectricityFactor || countryFactors[selectedCountry].electricity_factor);
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
 
 
     <section className='block-middle'>
      <section className='block-middle-1'>
      <TextInput
            id="people-select"
            labelText="Number of people in the house:"
            value={numPeople}
            onChange={handleNumPeopleChange}
          
          />
      </section>
      <section className='block-middle-2'>
        
      <TextInput
          id="electricity-input"
          labelText="Electricity in kWh"
          value={electricity || ""}
          onChange={handleElectricityChange}
          
          />
    
        <TextInput
          id="electricity-factor"
          labelText="at a factor of:"
          type="number"
          value={userElectricityFactor !== null 
          ? userElectricityFactor 
          : countryFactors[selectedCountry].electricity_factor || ""}
          onChange={handleUserElectricityChange}
        />
      </section>
      </section>

  
      {/* ------------------------------------------------------------------- */}
      <div className='block-bottom'>
        <Button onClick={calculateFootprint} kind="tertiary"className="button-center-text"
        >Calculate Household Footprint
        </Button>

        <h1>Total House Footprint = {(footprint * 0.001).toFixed(2)} metric tons of CO2e</h1>
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