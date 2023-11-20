// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

// Create comment

router.post('/create', (req, res) => {
    const { postId, userId, comment } = req.body;
    const newComment = new Comment({
        postId,
        userId,
        comment
    });
    newComment.save()
        .then(() => {
            res.status(201).json({ message: 'Comment created' });
        })
        .catch((err) => {
            res.status(400).json({ message: 'Error creating comment' });
        });
}
);
