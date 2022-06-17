var express = require('express');
var router = express.Router();

const siteController = require('../../controllers/SiteController')

router.get('/', siteController.show)

module.exports = router;
