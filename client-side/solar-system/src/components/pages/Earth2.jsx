import {  useEffect } from 'react';
import PlanetCard from '../PlanetCard'
import planetDataApi from '../../planetDataApi';
import "../../App.css"

function Earth2() {

  const planetInfo = planetDataApi();

  return (
    // <div className='planet' id='earth2'>
    <div className='earth2'>
        {planetInfo && <PlanetCard 
        name={planetInfo[2].name}
        size={planetInfo[2].size}
        distance={planetInfo[2].distanceFromSun}
        facts={planetInfo[2].facts}
        moons={planetInfo[2].moons}
        />}
    </div>
  )
}

export default Earth2