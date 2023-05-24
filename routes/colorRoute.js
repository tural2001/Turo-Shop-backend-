const express = require('express');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getallColor,
} = require('../controller/colorCtrl');
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createColor);
router.put('/:id', authMiddleware, isAdmin, updateColor);
router.delete('/:id', authMiddleware, isAdmin, deleteColor);
router.get('/', getallColor);
router.get('/:id', getColor);

module.exports = router;
