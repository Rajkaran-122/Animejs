const mongoose = require('mongoose');
const MangaPost = require('./_lib/MangaPost');

let conn = null;
async function connectToDatabase() {
  if (conn == null) {
    conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

module.exports = async (req, res) => {
  await connectToDatabase();
  if (req.method === 'GET') {
    const posts = await MangaPost.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ message: 'Missing title or content' });
    const newPost = new MangaPost({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
