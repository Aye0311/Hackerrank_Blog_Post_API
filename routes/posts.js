const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const app = express();
app.use(bodyParser.json());

// POST /posts
app.post('/posts', async (req, res) => {
  try {
    const post = await postsController.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});
module.exports = router;
