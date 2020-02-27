var express = require('express');
var router = express.Router();

var customerOperation = require('../controller/customerOperation');

router.get('/findAllCustomers', customerOperation.findAllCustomer);
router.get('/findOneByCustomerId', customerOperation.findOneByCustomerId);
router.delete('/deleteCustomer', customerOperation.deleteCustomer);
router.post('/createCustomer', customerOperation.createCustomer);
router.put('/updateCustomer', customerOperation.updateCustomer);

module.exports = router;
