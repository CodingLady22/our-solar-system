import { useState, useEffect } from 'react';
import axios from 'axios';

const planetDataApi = () => {
    
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

  return planetInfo
}

export default planetDataApi