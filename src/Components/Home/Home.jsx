import React from 'react';
import Common from '../Common';
import web from '../img/img.svg'
const Home=()=>{
    return(
      <>
      <Common 
      name='Welcome to Home page' 
      imgsrc={web} 
      visit="/contact" 
      btname="Contact Now"/>
      </>
    );
  };
  export default Home;