import "../App.css"
import earthImg from "../assets/nasa-earth-unsplash.jpg"


function PlanetCard({ name, size, distance, facts, moons }) {
  return (
    <div className="planetCard">
        <div className="firstPlanetCard">
          <img src={earthImg} alt="" width={"400px"} />
        </div>

        <div className="secondPlanetCard">
          <h2>{name}</h2>
          <p>Size: {size}</p>
          <p>Distance from the sun: {distance}</p>

          <div>
            <h3>Facts:</h3>
            <ul>
              {facts.map(fact => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="thirdPlanetCard">
          <h3>Moons:</h3>
            <div className="moonSection">
              <ul>
                {moons.map((moon) => (
                  <div>
                    <li key={moon}><span className="subTitle">Name:</span> {moon.name}  </li>
                    <li><span className="subTitle">Diameter:</span> {moon.diameter}</li>
                    <li><span className="subTitle">History:</span> {moon.history}</li>
                  </div>
                ))}
              </ul>
            </div>
        </div>
    </div>
  )
}

export default PlanetCard