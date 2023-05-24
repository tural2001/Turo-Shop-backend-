const express = require('express');
const {
  createCoupon,
  getallCoupons,
  updateCoupon,
  deleteCoupon,
  getCoupon,
} = require('../controller/couponCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, isAdmin, createCoupon);
router.get('/', authMiddleware, getallCoupons);
router.get('/:id', authMiddleware, getCoupon);
router.put('/:id', authMiddleware, isAdmin, updateCoupon);
router.delete('/:id', authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
