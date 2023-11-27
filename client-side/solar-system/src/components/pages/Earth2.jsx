import { useState, useEffect } from 'react';
import PlanetCard from '../PlanetCard'
// import planets from "../../../../../planets.json"
// import "../="
import "./App.css"
import axios from 'axios';

function Earth2() {

  const [planetInfo, setPlanetInfo] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5500/')
        setPlanetInfo(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData()
  }, [])


  return (
    // <div className='planet' id='earth2'>
    <div>
        {planetInfo && <PlanetCard 
        name={planetInfo[2].name}
        size={planetInfo[2].size}
        distance={planetInfo[2].distanceFromSun}
        />}
    </div>
  )
}

export default Earth2