const express = require('express'),
router = express.Router();
router.use(express.json())

const service = require('../services/driver.service');

//http://localhost:3306/api/drivers/
router.get('/', async (req, res) => {
    const drivers = await service.getAllDrivers()
    res.send(drivers)
});

//http://localhost:3306/api/drivers/adddriver
router.post('/adddriver/', async (req, res) => {
    await service.addDriver(req.body)
    console.log("Driver created!")
    res.send(req.body)
});

module.exports = router;