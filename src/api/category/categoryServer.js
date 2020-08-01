const CategorySchema = require('./category')
const errorHandler = require('../common/errorHandler')

CategorySchema.methods(['get', 'post', 'put', 'delete'])
CategorySchema.updateOptions({new: true, runValidators: true})
CategorySchema.after('post', errorHandler).after('put', errorHandler)

CategorySchema.route('count', (req, res, next) => {
    CategorySchema.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})


module.exports = CategorySchema