const express = require('express');
const {
  getallProduct,
  updateProduct,
  deleteProduct,
  createProduct,
  getaProduct,
  addToWishlist,
  rating,
} = require('../controller/productCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, isAdmin, createProduct);

router.get('/:id', getaProduct);
router.get('/', getallProduct);
router.put('/wishlist', authMiddleware, addToWishlist);
router.put('/rating', authMiddleware, rating);

router.put('/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/:id', authMiddleware, isAdmin, deleteProduct);

module.exports = router;
