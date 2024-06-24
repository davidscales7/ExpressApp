const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
    selectedValue: { type: String, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true }
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    finances: [financeSchema]
});

// Check if the model already exists
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
