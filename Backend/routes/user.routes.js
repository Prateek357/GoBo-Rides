const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const usercontroller = require("../controllers/user.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long!!'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 6 characters long')
], usercontroller.registerUser);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 6 characters long')
], usercontroller.loginUser);

router.get('/profile', authMiddleware.authUser, usercontroller.getUserProfile);

// Define the logout route
router.get('/logout', authMiddleware.authUser, usercontroller.logoutUser);

module.exports = router;