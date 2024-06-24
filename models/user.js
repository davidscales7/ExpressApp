// models/user.js
const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
    selectedValue: String,
    description: String,
    amount: Number
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    finances: [financeSchema]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
  