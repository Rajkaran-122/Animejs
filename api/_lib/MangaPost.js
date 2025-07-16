// backend/models/MangaPost.js
const mongoose = require('mongoose');

const MangaPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.MangaPost || mongoose.model('MangaPost', MangaPostSchema);
