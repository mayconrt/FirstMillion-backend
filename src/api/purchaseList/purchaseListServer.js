const PurchaseList = require('./purchaseList')
const errorHandler = require('../common/errorHandler')

PurchaseList.methods(['get', 'post', 'put', 'delete'])
PurchaseList.updateOptions({new: true, runValidators: true})
PurchaseList.after('post', errorHandler).after('put', errorHandler)

PurchaseList.route('count', (req, res, next) => {
    PurchaseList.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

// PurchaseList.route('summary', (req, res, next) => {
//     PurchaseList.aggregate({
//         $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
//     }, {
//         $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
//     }, {
//         $project: {_id: 0, credit: 1, debt: 1}
//     }, (error, result) => {
//         if(error) {
//             res.status(500).json({errors: [error]})
//         } else {
//             res.json(result[0] || { credit: 0, debt: 0 })
//         }
//     })
// })

module.exports = PurchaseList