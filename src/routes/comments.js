const express = require('express');
const { protect } = require('../middleware/auth');
const commentsController = require('../controllers/commentsController');

const router = express.Router({ mergeParams: true });

// Get all comments for a post
router.get('/', commentsController.getComments);

// Add a comment to a post (requires login)
router.post('/', protect, commentsController.createComment);

// Delete a comment (optional: only author/admin)
router.delete('/:commentId', protect, commentsController.deleteComment);

module.exports = router;
