const express = require("express");
const route = express.Router();

const servicefilecalling = require('../services/services')
const controllerfilecalling= require('../controllar/controllar')
route.get('/',servicefilecalling.sportformfile)
route.get('/thankyou',servicefilecalling.thankyoufile)
route.post('/api/users',controllerfilecalling.create)
route.get('/api/users',controllerfilecalling.find);

module.exports = route;