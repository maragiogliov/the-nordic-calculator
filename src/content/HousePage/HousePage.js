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
              <h3>Household carbon footprint calculator</h3>
              <p id='block-top-hide'>Enter your consumption of each type of energy, and press the Calculate button</p>
              <p id='block-top-hide'>Your individual footprint is calculated by dividing the amount of energy by the number of people in your house.</p>
            </div>
          </div>
      {/* ------------------------------------------------------------------- */}
      <section className='block-middle'>
        <section className='block-middle-1'>
          <section className='block-middle-1-1'>
            <p>How many people are in your household?</p>
            <TextInput
                  id="people-select"
                  labelText=""
                  value={numPeople}
                  onChange={handleNumPeopleChange}
                  className='block-middle-people'
                />
          </section>
          <section className='block-middle-1-2'>
            <p id='block-top-hide'>To calculate your full household footprint, select "1".</p>
          </section>
        </section>

        <section className='block-middle-2'>
          <h5 className='block-middle-titles'>Electricity:</h5>
        <TextInput
            id="electricity-input"
            labelText="Electricity in kWh"
            value={electricity || ""}
            onChange={handleElectricityChange}    
            className='block-middle-form'
            />
      
          <TextInput
            id="electricity-factor"
            labelText="at a factor of:"
            type="number"
            value={userElectricityFactor !== null 
            ? userElectricityFactor 
            : countryFactors[selectedCountry].electricity_factor || ""}
            onChange={handleUserElectricityChange}
            className='block-middle-form'
          />
        </section>
        <section className='block-middle-3'>
          <h5 className='block-middle-titles'>Natural Gas:</h5>
          <TextInput
              className='block-middle-form'
          />
          <TextInput
              className='block-middle-form'
            />
        </section>
        <section className='block-middle-3'>
          <h5 className='block-middle-titles'>Heating oil:</h5>
          <TextInput
              className='block-middle-form'
          />
          <TextInput
              className='block-middle-form'
            />
        </section>
        <section className='block-middle-3'>
          <h5 className='block-middle-titles'>Coal:</h5>
          <TextInput
              className='block-middle-form'
          />
          <TextInput
              className='block-middle-form'
            />
        </section>
        <section className='block-middle-3'>
          <h5 className='block-middle-titles'>LPG:</h5>
          <TextInput
              className='block-middle-form'
          />
          <TextInput
              className='block-middle-form'
            />
        </section>
        <section className='block-middle-3'>
          <h5 className='block-middle-titles'>Propane:</h5>
          <TextInput
              className='block-middle-form'
          />
          <TextInput
              className='block-middle-form'
            />
        </section>
        <section className='block-middle-3'>
          <h5 className='block-middle-titles'>Wooden Pallets:</h5>
          <TextInput
              className='block-middle-form'
          />
          <TextInput
              className='block-middle-form'
            />
        </section>
      </section>
        {/* ------------------------------------------------------------------- */}
        <div className='block-bottom'>
        

          <h4>Total House Footprint = {(footprint * 0.001).toFixed(2)} metric tons of CO2e</h4>

          <div className='navigation-container'>
          <Link to="/welcome">
            <Button className="navigation-content">Previous</Button>
          </Link>
          <Button onClick={calculateFootprint} kind="tertiary"className="button-center-text"
          >Calculate Household Footprint
          </Button>
          <Link to="/flight">
            <Button className="navigation-content">Next</Button>
          </Link>
          </div>
        </div>
    </section>
 
  </>;

};

export default HousePage;