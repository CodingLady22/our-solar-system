import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AllPlanets from '../planets/AllPlanets';


function Main() {

  return (
    <div>
        <Header />
        <AllPlanets />
        <Footer />
    </div>
  )
}

export default Main