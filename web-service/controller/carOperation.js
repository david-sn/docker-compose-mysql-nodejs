var Models = require('../models');

module.exports.createCar = async function (req, res) {

    let customerDB = await Models.Customers.findOne({ where: { id: req.body.customerId } });
    if (customerDB) {
        Models.Cars.create({
            brandName: req.body.brandName,
            yearMade: req.body.yearMade,
            cost: req.body.cost,
            CustomerId: customerDB.dataValues.id
        }).then(function (savedDB) {
            res.status(200).json({ status: "OK", result: savedDB });
        });
    } else {
        res.status(200).json({ status: "DATA_NOT_FOUND" });
    }
}

module.exports.updateCar = async function (req, res) {
    let updateJSON;
    if (req.body.customerId) {
        let customerDB = await Models.Customers.findOne({ where: { id: req.body.customerId } });
        if (customerDB) {
            updateJSON = {
                brandName: req.body.brandName,
                yearMade: req.body.yearMade,
                cost: req.body.cost,
                CustomerId: customerDB.dataValues.id
            }
        } else {
            res.status(200).json({ status: "DATA_NOT_FOUND" })
        }
    } else {
        updateJSON = {
            brandName: req.body.brandName,
            yearMade: req.body.yearMade,
            cost: req.body.cost,
            CustomerId: customerDB.dataValues.id
        }
    }
    Models.Cars.update(updateJSON, { where: { id: req.query.id } })
        .then(function (updated) {
            res.status(200).json({
                status: "OK", result: updated
            })
        });
}

module.exports.deleteCar = function (req, res) {
    Models.Cars.destroy({ where: { id: req.query.id } })
        .then(function (deleted) {
            res.status(200).json({ status: "OK", result: deleted });
        });
}

module.exports.findAllCars = function (req, res) {
    Models.Cars.findAll({
        include: [Models.Customers]
    }).then(function (carDB) {
        res.status(200).json({ status: "OK", result: carDB })
    });
}

module.exports.findOneByIdCar = function (req, res) {
    Models.Cars.findOne({
        where: { id: req.query.id },
        include: [Models.Customers]
    }).then(function (carDB) {
        if (carDB)
            res.status(200).json({ status: "OK", result: carDB })
        else
            res.status(200).json({ status: "DATA_NOT_FOUND" })
    });
}


module.exports.findCustomerCarsByCustomerId = function (req, res) {
    Models.Cars.findAll({
        where: { customerId: req.query.id },
        // include: [Models.Customers]
    }).then(function (carDB) {
        res.status(200).json({ status: "OK", result: carDB })
    });
}

module.exports.test = async function (req, res) {
    const { QueryTypes } = require('sequelize');


    const rs = await Models.sequelize.query('SELECT * FROM Cars', {
        model: Models.Customers,
        mapToModel: true // pass true here if you have any mapped fields
    });
    // console.log(Models.);

    res.status(200).json({ status: "OK", result: rs })
}