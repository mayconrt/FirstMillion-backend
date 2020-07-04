const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    product: { type: String, required: true },
    unitValue: { type: Number, min: 0, required: true },
    quantity: { type: Number, min: 0, required: true },
    status: { type: String, required: true, uppercase:true, enum:['WIP', 'DONE'], default:'WIP' },
})

const purchaseListSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    products: [productSchema]
})

module.exports = restful.model('PurchaseList', purchaseListSchema)