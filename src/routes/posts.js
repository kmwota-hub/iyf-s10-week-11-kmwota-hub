const express = require('express');
const { protect } = require('../middleware/auth');
const postsController = require('../controllers/postsController');
const commentsController = require('../controllers/commentsController');
const router = express.Router();

router.get('/', postsController.getAllPosts);
router.post('/', protect, postsController.createPost);
router.put('/:id', protect, postsController.updatePost);
router.delete('/:id', protect, postsController.deletePost);

// Comments
router.get('/:postId/comments', commentsController.getComments);
router.post('/:postId/comments', protect, commentsController.createComment);

module.exports = router;
