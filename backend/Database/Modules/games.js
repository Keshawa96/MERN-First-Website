const mongoose = require('mongoose');

// Define a new schema for user registration
const UserSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    filepath: {
        type: Buffer,
        required: true
    },
   
});

// Create a model from the schema
const Game = mongoose.model('Game', UserSchema , 'Game');

// Export the User model
module.exports = Game;


