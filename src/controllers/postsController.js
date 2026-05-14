const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const post = new Post({ ...req.body, author: req.user._id });
  await post.save();
  res.status(201).json(post);
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'username email').populate('comments');
  res.json(posts);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  if (post.author.toString() !== req.user._id.toString())
    return res.status(403).json({ error: 'Not your post' });
  Object.assign(post, req.body);
  await post.save();
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  if (post.author.toString() !== req.user._id.toString())
    return res.status(403).json({ error: 'Not your post' });
  await post.deleteOne();
  res.status(204).send();
};
