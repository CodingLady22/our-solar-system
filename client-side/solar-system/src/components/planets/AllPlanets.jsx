import { useNavigate } from "react-router-dom";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";

import '../../App.css'

function AllPlanets() {

    const navigate = useNavigate();


  const handleClick = planetId => {

    navigate(`/planet/${planetId}`)
  };


  return (
    <div className="planets-all">
        <div className='single-planet' onClick={() => handleClick(1)}>
        <Mercury />
      </div>
      <div className='single-planet' onClick={() => handleClick(2)}>
        <Venus />
      </div>
      <div className='single-planet' onClick={() => handleClick(3)}>
        <Earth />
      </div>
      <div className='single-planet' onClick={() => handleClick(4)}>
        <Mars />
      </div>
      <div className='single-planet' onClick={() => handleClick(5)}>
        <Jupiter />
      </div>
      <div className='single-planet' onClick={() => handleClick(6)}>
        <Saturn />
      </div>
      <div className='single-planet' onClick={() => handleClick(7)}>
        <Uranus />
      </div>
      <div className='single-planet' onClick={() => handleClick(8)}>
        <Neptune />
      </div>
    </div>

  )
}

export default AllPlanets