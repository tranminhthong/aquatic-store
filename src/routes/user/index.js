var express = require('express');
var router = express.Router();

const userController = require('../../controllers/userController');

router.get('/list-user', userController.getListUsers)

module.exports = router;
