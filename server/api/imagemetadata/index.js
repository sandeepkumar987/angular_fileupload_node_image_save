'use strict';

var express = require('express'),
    router = express.Router();

// Controller as Service
const controller = require('./imagemetadata.controller');

router.get('/', controller.create);

module.exports = router;