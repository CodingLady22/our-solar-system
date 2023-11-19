import { getPlanets, getMoons } from "../controller/planets";
import Planet from "../models/Planet";
import Moon from "../models/Moon";

// Test for planets
describe('getPlanets', () => {
    it('should return an array of planets', async () => {
        // Mock Planets.find() function to return a predefined array
        Planet.find = jest.fn(() => ['Earth', 'Mars', 'Jupiter']);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await getPlanets(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(['Earth', 'Mars', 'Jupiter']);
    });

    it('should handle errors and return a 404 status with an error message', async () => {
        // Mock Planets.find() function to throw an error
        Planet.find = jest.fn(() => {
            throw new Error('Mock error');
        });

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await getPlanets(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'Mock error' });
    });
});

// Test for moons
describe('getMoons', () => {
    it('should return an array of moons', async () => {
        // Mock Planets.find() function to return a predefined array
        Moon.find = jest.fn(() => ['Phobos', 'Callisto', 'Moon']);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await getMoons(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(['Phobos', 'Callisto', 'Moon']);
    });

    it('should handle errors and return a 404 status with an error message', async () => {

        Moon.find = jest.fn(() => {
            throw new Error('Mock error');
        });

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await getMoons(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'Mock error' });
    });
});