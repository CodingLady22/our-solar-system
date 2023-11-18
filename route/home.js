import express from "express";
const router = express.Router();
import { getPlanets, getMoons } from "../controller/planets.js";

// * Handles GET request from the homepage
router.get("/", getPlanets); // read
router.get("/moon", getMoons); // read

export default router;