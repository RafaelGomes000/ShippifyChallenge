const express = require('express'),
router = express.Router();
router.use(express.json())

const service = require('../services/vehicle.service');

//http://localhost:3306/api/vehicles/getvehiclebydriver
router.get('/getvehiclebydriver/:id', async (req, res) => {
    const vehicle = await service.getVehiclesByDriver(req.params.id)
    if(vehicle.lenght == 0)
        res.status(404).json("The driver doesn't exist!: " + req.params.id);
    else
        res.send(vehicle)
});

//http://localhost:3306/api/vehicles/addvehicle
router.post('/addvehicle/', async (req, res) => {
    const driver = await service.addVehicle(req.body)
    console.log("Vehicle created!")
    res.send(driver)
});

//http://localhost:3306/api/vehicles/deleteVehicleById
router.delete('/deleteVehicleById/:id', async (req, res) => {
    const vehicle = await service.deleteVehicleById(req.params.id)
    if(vehicle.lenght == 0)
        res.status(404).json("The vehicle doesn't exist!");
    else
        res.send(vehicle)
});

module.exports = router;