var express = require('express');
var router = express.Router();

var carOperation=require('../controller/carOperation');


router.get('/findAllCars', carOperation.findAllCars);
router.get('/findOneByIdCar', carOperation.findOneByIdCar);
router.delete('/deleteCar', carOperation.deleteCar);
router.post('/createCar', carOperation.createCar);
router.put('/updateCar', carOperation.updateCar);
router.get('/findCustomerCars', carOperation.findCustomerCarsByCustomerId);
router.get('/test', carOperation.test);

module.exports = router;
