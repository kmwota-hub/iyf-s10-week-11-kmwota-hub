const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
// Nested route: /api/posts/:postId/comments
app.use('/api/posts/:postId/comments', commentRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Community Hub API running 🚀' });
});

module.exports = app;
