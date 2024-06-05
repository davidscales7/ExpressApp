const mongoose = require('mongoose')
const financeSchema = new mongoose.Schema({
    selectedValue: String,
    description: String,
    amount: Number,
    

})

const Finance = mongoose.model('Finance',financeSchema)

module.exports = Finance