const restful = require('node-restful')
const mongoose = restful.mongoose

const fixedExpenseSchema = new mongoose.Schema({
    name: { type: String, required: true, uppercase:true },
    value: { type: Number, min: 1, required: true },
    dueDate: { type: Number, min: 1, max:31, required: true },
    lastDate: { type: Date, required: true },
    status: { type: String, required: true, uppercase:true, default: 'PENDING' }
})

module.exports = restful.model('FixedExpenseSchema', fixedExpenseSchema)