const express = require('express');
const User = require('../Database/Modules/users');
const { authenticate , authorize } = require('../Middleware/Auth');

const router = express.Router();

router.get('/', authenticate,authorize('user') , async (req, res) => {
    try {
        const user = req.user; // This comes from the authenticate middleware
        const userInfo = await User.findById(user._id); // Assuming your user schema has fields for email and name

        if (!userInfo) {
            return res.status(404).json({
                status: 'Failed',
                message: 'User not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                email: userInfo.email,
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});

module.exports = router;
