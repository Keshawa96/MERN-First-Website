const express = require('express');
const User = require('../Database/Modules/users');  // Assuming the User model is as you provided
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, contactNumber, password, confirmPassword  } = req.body;

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user with the hashed password
        const user = new User({ firstName, lastName, email, contactNumber,  password: hashedPassword, confirmPassword  });

        // Save the user to the database
        await user.save();

        // Send a success response
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (err) {
        let errorMessage;

        if (err.code === 11000) {
            // Handle duplicate key error
            errorMessage = 'Email already exists';
        } else if (err.name === 'ValidationError') {
            // Handle Mongoose validation error
            errorMessage = Object.values(err.errors).map(val => val.message).join(', ');
        } else {
            // Generic error message
            errorMessage = err.message;
        }

        // Send a failed response
        res.status(500).json({
            status: 'failed',
            message: errorMessage
        });
    }
});

module.exports = router;