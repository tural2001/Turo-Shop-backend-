const express = require('express');
const {} = require('../controller/paymentCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const createpayment = require('../controller/paymentCtrl');

const router = express.Router();

router.post('/payment', createpayment);

module.exports = router;
