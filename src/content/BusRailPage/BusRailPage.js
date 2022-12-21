import React from 'react';
import { Button } from '@carbon/react';
import { DatePicker, DatePickerInput } from '@carbon/react';
import { Dropdown } from '@carbon/react';
import { Link } from 'react-router-dom';

const BusRailPage = () => {
  return <>
    <section className='frame-calculator'>
    {/* ------------------------------------------------------------------- */}
        <div className='block-top'>
          <div className='title'>
            <h1>Bus and Rail </h1>
           
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
        <Link to="/motorbike">
          <Button className="navigation-content">Previous</Button>
        </Link>
        <Link to="/secondary">
          <Button className="navigation-content">Next</Button>
        </Link>
        </div>
      </div>
   </section>

 
  </>;

};

export default BusRailPage;