import "../App.css"


function PlanetImg(props) {
  return (
    <div>
        <div className="firstPlanetCard">
          <img src={props.Img} alt="" width={"400px"} />
        </div>
    </div>
  )
}

export default PlanetImg