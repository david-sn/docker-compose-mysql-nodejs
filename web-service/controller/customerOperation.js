var Models = require('../models');



module.exports.createCustomer = function (req, res) {
    Models.Customers.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }).then(function (saved) {
        res.status(200).json({
            status: "OK",
            result: saved.dataValues
        })
    }).catch(e => { console.log(e); });
}

module.exports.updateCustomer = function (req, res) {
    Models.Customers.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    },
        { where: { id: req.query.id } }
    ).then(function (savedDB) {
        res.status(200).json({
            status: "OK",
            result: savedDB
        })
    });
}

module.exports.deleteCustomer = function (req, res) {
    Models.Customers.destroy({ where: { id: req.query.id } })
        .then(function () {
            res.status(200).json({
                status: "OK"
            })
        });
}

module.exports.findAllCustomer = function (req, res) {
    Models.Customers.findAll({
        include: [Models.Cars]
    }).then(function (carDB) {
        res.status(200).json({
            status: "OK",
            result: carDB
        })
    });
}

module.exports.findOneByCustomerId = function (req, res) {
    Models.Customers.findOne({
        where: { id: req.query.id },
        include: [Models.Cars]
    }).then(function (carDB) {
        if (carDB)
            res.status(200).json({ status: "OK", result: carDB });
        else
            res.status(200).json({ status: "DATA_NOT_FOUND" });
    });
} 
