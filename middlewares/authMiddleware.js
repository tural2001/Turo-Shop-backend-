const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token = null;
  if (req?.headers?.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error(
        'Icazə verilmiş tokenin vaxtı keçib, lütfən, yenidən daxil olun'
      );
    }
  } else {
    throw new Error('Başlığa əlavə edilmiş heç bir işarə yoxdur');
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role !== 'admin') {
    throw new Error('Siz admin deyilsiniz!!!');
  } else {
    next();
  }
});
module.exports = { authMiddleware, isAdmin };
