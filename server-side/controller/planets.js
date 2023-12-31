import Planets from "../../server-side/models/Planet.js";
import Moons from "../../server-side/models/Moon.js";

//* GET: getting the planet info
const getPlanets = async (req, res) => {
    try {
        const planets = await Planets.find().populate("moons");
        res.status(200).json(planets);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

//* GET: getting the moon info
const getMoons = async (req, res) => {
    try {
        const moons = await Moons.find();
        res.status(200).json(moons);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export {
    getPlanets,
    getMoons
}