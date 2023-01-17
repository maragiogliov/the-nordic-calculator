import React from 'react';
import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'


import {Home} from '@carbon/react/icons';
import { PlanePrivate } from '@carbon/react/icons';
import {Car} from '@carbon/react/icons';
import {Scooter} from '@carbon/react/icons';
import {Bus} from '@carbon/react/icons';
import {Add} from '@carbon/react/icons';
import { ChartLineData } from '@carbon/react/icons';



const IconsNavigation = ({location}) => {
  return <>
    {/* ------------------------------------------------------------------- */}
        <div className='block-top'>
          <div className='progress-bar-container'>
            <Link to="/house" className={location.pathname === '/house' ? 'active' : ''}>
              <Home
                className={location.pathname === '/house' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
            <Link to="/flight" className={location.pathname === '/flight' ? 'active' : ''}>
              <PlanePrivate
                className={location.pathname === '/flight' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
            <Link to="/car" className={location.pathname === '/car' ? 'active' : ''}>
              <Car
                className={location.pathname === '/car' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
              <Link to="/motorbike" className={location.pathname === '/motorbike' ? 'active' : ''}>
              <Scooter
                className={location.pathname === '/motorbike' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
              <Link to="/bus-rail" className={location.pathname === '/bus-rail' ? 'active' : ''}>
              <Bus
                className={location.pathname === '/bus-rail' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
              <Link to="/secondary" className={location.pathname === '/secondary' ? 'active' : ''}>
              <Add
                className={location.pathname === '/secondary' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
            <Link to="/results" className={location.pathname === '/results' ? 'active' : ''}>
              <ChartLineData
                className={location.pathname === '/results' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
          </div>       
        </div>
 
  </>;

};

export default withRouter(IconsNavigation);
