var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.post('/', controller.create);

module.exports = router;
