const restful = require('node-restful')
const mongoose = restful.mongoose

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true, uppercase:true },
    type: { type: String, required: true, uppercase:true },
    colorValue: { type: String, required: true, uppercase:true }
})

module.exports = restful.model('categorySchema', CategorySchema)