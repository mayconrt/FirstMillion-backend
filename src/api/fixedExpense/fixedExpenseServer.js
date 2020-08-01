const FixedExpenseSchema = require('./fixedExpense')
const errorHandler = require('../common/errorHandler')

FixedExpenseSchema.methods(['get', 'post', 'put', 'delete'])
FixedExpenseSchema.updateOptions({new: true, runValidators: true})
FixedExpenseSchema.after('post', errorHandler).after('put', errorHandler)

FixedExpenseSchema.route('count', (req, res, next) => {
    FixedExpenseSchema.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})


module.exports = FixedExpenseSchema