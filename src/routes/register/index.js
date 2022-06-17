var express = require('express');
var router = express.Router();

const registerController = require('../../controllers/RegisterController')

router.all('/', (req, res) => registerController.register(req, res));

module.exports = router;