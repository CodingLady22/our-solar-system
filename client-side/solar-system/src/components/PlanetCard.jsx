import "../App.css"

function PlanetCard({ name, size, distance }) {
  return (
    <div className="planetCard">
        <h2>{name}</h2>
        <p>Size: {size}</p>
        <p>Distance from the sun: {distance}</p>
    </div>
  )
}

export default PlanetCard