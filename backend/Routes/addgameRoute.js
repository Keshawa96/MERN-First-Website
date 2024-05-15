const express = require('express');
// const User = require('../Database/Modules/users');  // Assuming the User model is as you provided
const bcrypt = require('bcrypt');
const router = express.Router();
const Game = require('../Database/Modules/games');
const mongoose = require('mongoose');




const multer = require('multer');



// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/fileup'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set the file name to be unique
  }
});

const upload = multer({ storage: storage });

// POST route for file upload
router.post('/', upload.single('file'), async (req, res) => {
    try {
      // Save file data to MongoDB
      const newFile = new Game({
        filename: req.file.originalname,
        filepath: req.file.path,
      });
      await newFile.save();
      res.status(200).json({ message: 'File uploaded successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;
