// routes/index.js
const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Cannot find user' });
        }

        if (password === user.password) {
            return res.json({ message: 'Success', userId: user._id });
        } else {
            return res.status(400).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.json({ message: 'Registration successful', userId: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/finance', async (req, res) => {
    try {
        const { userId, selectedValue, description, amount } = req.body;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const finance = {
            selectedValue,
            description,
            amount,
        };

        user.finances.push(finance);
        await user.save();

        res.json({ message: 'Finance entry saved' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
