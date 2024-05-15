const mongoose = require('mongoose');

// Define a new schema for user registration
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['user','admin'],  // Only allow these values
        default: 'user'           // Default to 'user' role
    },
});

// Create a model from the schema
const User = mongoose.model('User', UserSchema , 'User');

// Export the User model
module.exports = User;