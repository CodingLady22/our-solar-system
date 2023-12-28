import React from 'react'

function Moon({ moons }) {
  return (
    <div className='thirdPlanetCard' id='moonComponent'>
        <h3>Moons:</h3>
      <div className="moonSection">
        <ul>
          {moons.map((moon) => (
            <div key={moon}>
              <li><span className="subTitle">Name:</span> {moon.name}</li>
              <li><span className="subTitle">Diameter:</span> {moon.diameter}</li>
              <li><span className="subTitle">History:</span> {moon.history}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Moon