import "../App.css"


function PlanetImg(props) {
  return (
    <div>
        <div className="firstPlanetCard">
          <img src={props.Img} alt="image of a planet" width={"400px"} />
        </div>
    </div>
  )
}

export default PlanetImg