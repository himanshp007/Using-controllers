const express = require('express');

const router = express.Router();
const contactController = require('../controllers/contactus');

router.get('', contactController.getContactUs);

router.post('', contactController.postContactsUs);

module.exports = router;
