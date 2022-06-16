import { Typography } from '@material-ui/core';
import React from 'react';
import Stepper from './Stepper';
// import logo from '../assets/Eden_logo';

function Home() {
  return (
    <section>
        <img src={require('../assets/Eden_logo.PNG')} alt="" style={{width:'100px', padding:'10px 0px',margin:'5% 0px 3% 0px'}} />
        <Stepper />
        
    </section>
  )
}

export default Home