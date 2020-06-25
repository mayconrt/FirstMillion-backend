const restful = require('node-restful')
const mongoose = restful.mongoose

const dailySchema = new mongoose.Schema({
    paymentDate:{type: Date, required: [true, 'Payment date is mandatory'], default: Date.now},
    description:{type: String, required:[true, 'Description is mandatory']},
    value:{type: Number, required:[true, 'Value is mandatory']},
    category:{type: String, required:[true, 'Category is mandatory'], uppercase:true},
    type:{type: String, required:[true, 'Type is mandatory'], uppercase:true},
    paymentType:{type: String, required:[true, 'Payment type is mandatory']},
})

module.exports = restful.model('DailyExpense', dailySchema)