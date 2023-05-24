const express = require('express');
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updateaUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  createOrder,
  removeProductFromCart,
  updateProductQuantityFromCart,
  getMyOrders,
  getMonthWiseOrderIncome,
  getMonthWiseOrderCount,
  getYearlyTotalOrders,
  getAllOrders,
  getaOrder,
  getSingleOrders,
  updateOrder,
  emptyCart,
} = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.post('/login', loginUserCtrl);

router.put('/password', authMiddleware, updatePassword);
router.post('/admin-login', loginAdmin);
router.post('/cart', authMiddleware, userCart);

// router.post('/cart/applycoupon', authMiddleware, applyCoupon);
router.post('/cart/create-order', authMiddleware, createOrder);
router.get('/all-users', getallUser);
router.get('/getmyorders', authMiddleware, getMyOrders);
router.get('/getallorders', authMiddleware, isAdmin, getAllOrders);
router.get('/getaOrder/:id', authMiddleware, isAdmin, getSingleOrders);
router.put('/updateOrder/:id', authMiddleware, isAdmin, updateOrder);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get('/cart', authMiddleware, getUserCart);
router.get('/wishlist', authMiddleware, getWishlist);
router.get('/getMonthWiseOrderIncome', authMiddleware, getMonthWiseOrderIncome);
router.get('/getYearlyTotalOrders', authMiddleware, getYearlyTotalOrders);

router.get('/:id', authMiddleware, isAdmin, getaUser);
router.delete(
  '/delete-product-cart/:cartItemId',
  authMiddleware,
  removeProductFromCart
);
router.delete(
  '/update-product-cart/:cartItemId/:newQuantity',
  authMiddleware,
  updateProductQuantityFromCart
);
// router.delete('/empty-cart', authMiddleware, isAdmin, emptyCart);
router.delete('/empty-cart', authMiddleware, emptyCart);
router.delete('/:id', deleteaUser);
// router.put(
//   '/order/update-order/:id',
//   authMiddleware,
//   isAdmin,
//   updateOrderStatus
// );

router.put('/edit-user', authMiddleware, updateaUser);
router.put('/save-address', authMiddleware, saveAddress);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);
module.exports = router;
