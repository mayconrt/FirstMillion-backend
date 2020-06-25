const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    createDate:{type: Date, required: [true, 'Date is mandatory'], default: Date.now},
    product:{type: String, required:[true, 'Product is mandatory']},
    price:{type: Number, required:[true, 'Price is mandatory']},
    category:{type: String, required:[true, 'Category is mandatory'], uppercase:true},
})

module.exports = restful.model('Product', productSchema)