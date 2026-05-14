const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.createComment = async (req, res) => {
  const post = await Post.findById(req.params.postId);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  const comment = new Comment({ ...req.body, post: post._id });
  await comment.save();
  post.comments.push(comment._id);
  await post.save();

  res.status(201).json(comment);
};

exports.getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId });
  res.json(comments);
};
