const express = require('express');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const {
  createBlog,
  updateBlog,
  getBlog,
  getallBlogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
  uploadImages,
} = require('../controller/blogCtrl');
const { uploadPhoto, blogImgResize } = require('../middlewares/uploadImages');
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createBlog);
router.put(
  '/upload/:id',
  authMiddleware,
  isAdmin,
  uploadPhoto.array('images', 2),
  blogImgResize,
  uploadImages
);
router.put('/likes', authMiddleware, liketheBlog);
router.put('/dislikes', authMiddleware, disliketheBlog);
router.put('/:id', authMiddleware, isAdmin, updateBlog);
router.delete('/:id', authMiddleware, isAdmin, deleteBlog);
router.get('/:id', getBlog);
router.get('/', getallBlogs);

module.exports = router;
