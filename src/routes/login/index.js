var express = require('express');
var router = express.Router();

const loginController = require('../../controllers/LoginController')

router.all('/', (req, res) => loginController.login(req, res));

module.exports = router;