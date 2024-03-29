const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const successController = require('../controllers/successMsg');

const router = express.Router();

router.get('', successController.getSuccess);

module.exports = router;
