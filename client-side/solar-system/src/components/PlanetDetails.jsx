import { useParams } from "react-router-dom"
import PlanetCard from "./PlanetCard";
import planetDataApi from "../planetDataApi";


function PlanetDetails() {
    const { planetId } = useParams();
    const planetInfo = planetDataApi();

    console.log("planetId:", planetId);
   console.log("planetInfo:", planetInfo);
  
    // if (!planetInfo) {
    //   return <div>Loading...</div>;
    // }

    if (!planetInfo || !planetInfo[planetId - 1]) {
        return <div>Error: Planet not found</div>;
     }
  
    const planet = planetInfo[planetId - 1];
  
    return (
      <div className='planet-details'>
        <PlanetCard
          name={planet.name}
          size={planet.size}
          distance={planet.distanceFromSun}
          facts={planet.facts}
          moons={planet.moons}
        />
      </div>
    );
}

export default PlanetDetails