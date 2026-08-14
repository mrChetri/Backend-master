const Post = require("../model/post");

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ success: false, message: "Title and content are required" });
    }
    const author = req.user._id;
    if (!author) {
      return res.status(401).json({ success: false, message: "User not authenticated or user ID missing" });
    }
    const post = await Post.create({ title, content, author });
    return res.status(201).json({ success: true, message: "Post created successfully", data: post });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username email");
    return res.status(200).json({ success: true, count: posts.length, message: "Posts fetched successfully", data: posts });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

module.exports = { createPost, getPosts };
