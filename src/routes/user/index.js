var express = require('express');
var router = express.Router();

const userController = require('../../controllers/UserController');

router.route('/create')
    .get((req, res) => {
        userController.createUser(req, res);
    })
    .post((req, res) => {
        userController.createUser(req, res);
    });

router.get('/', userController.getListUsers);

module.exports = router;
