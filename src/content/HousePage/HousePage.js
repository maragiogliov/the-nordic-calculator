import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@carbon/react/lib/components/Button/Button';


const RepoPage = () => {
  return <>
  <section className='frame-calculator'>
  <h1>HOUSE</h1>
            <div className='button-container'>
              <Link to="/welcome">
                <Button className='button-content'>Previous</Button>
              </Link>
              <Link to="/car">
                <Button className='button-content'>Next</Button>
              </Link>
            </div>
          </section>
  </>;

};

export default RepoPage;