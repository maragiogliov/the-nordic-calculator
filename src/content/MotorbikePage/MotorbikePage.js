import React from 'react';
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

const MotorbikePage = () => {
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
            <h1>Motorbike </h1>
           
          </div>
        </div>
    {/* ------------------------------------------------------------------- */}
        <div className='block-middle'>
            <div className='country'>
                <h3>First, please tell us where you live</h3>
                <div className='country-picker-container'>
                      <Dropdown
                      className='date-picker'
                        items={[
                          { id: 'option-0', text: 'Denmark 🇩🇰' },
                          { id: 'option-1', text: 'Sweden 🇸🇪' },
                          { id: 'option-2', text: 'Norway 🇳🇴' },
                          { id: 'option-2', text: 'Germany 🇩🇪' },
                        ]}
                        itemToElement={(item) =>
                          item ? (
                            <span className="test" style={{ color: 'white' }}>
                              {item.text} 
                            </span>
                          ) : (
                            ''
                          )
                        }
                        label="Select a country..."
                      />
                  </div>
              </div>
            <div className='date'>
              <div className='date-text'>
                <h3>Enter the period this calculation covers</h3>
                <h4 className='hide-text'>Carbon footprint calculations are typically based on annual  </h4>
                <h4 className='hide-text'>emissions from the previous 12 months.</h4>
              </div>
            
              
                <DatePicker className='date-picker' datePickerType="range">
                  <DatePickerInput placeholder="Start" />
                  <DatePickerInput placeholder="End" />
                </DatePicker>
              
            </div>
      </div>
    {/* ------------------------------------------------------------------- */}
      <div className='block-bottom'>
        <h5 className='block-bottom-top'>With your calculation, you can offset your emissions through one of our climate-friendly projects.</h5>
        <div className='navigation-container'>
        <Link to="/car">
          <Button className="navigation-content">Previous</Button>
        </Link>
        <Link to="/bus-rail">
          <Button className="navigation-content">Next</Button>
        </Link>
        </div>
      </div>
   </section>

 
  </>;

};

export default MotorbikePage;