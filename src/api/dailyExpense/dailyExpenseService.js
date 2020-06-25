const DailyExpense = require('./dailyExpense')
const errorHandler = require('../common/errorHandler')

DailyExpense.methods(['get', 'post', 'put', 'delete'])
DailyExpense.updateOptions({ new: true, runValidators: true })
DailyExpense.after('post', errorHandler).after('put', errorHandler)

DailyExpense.route('count', (req, res, next) => {
    DailyExpense.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

DailyExpense.route('totalSalary', (req, res, next) => {
        // {$match: { category: "SALARY" } },
        // {$project: {totalSalary: {$sum: "$value"}} }, 
        // {$group: {_id: "$category", totalSalary: {$sum: "$totalSalary"}} }, 
        // {$project: {_id: 0, totalSalary: 1} }     
    DailyExpense.aggregate([
        {
            $group: {
                _id: '$type',
                total: { $sum: "$value" }
            }
        }, { $project: { _id: 1, total: 1 } }

    ],

        (error, result) => {
            if (error) {
                res.status(500).json({ errors: [error] })
            } else {
                let salary = 0
                let expense = 0
                let investment = 0

                result.forEach(element => {
                    if (element._id == 'RENDA')
                        salary = element.total

                    if (element._id == 'DESPESA')
                        expense = element.total

                    if (element._id == 'INVESTIMENTO')
                        investment = element.total
                })

                res.json({ salary, expense, investment })
            }
        }


    )
})


DailyExpense.route('totalbycategory', (req, res, next) => {  
DailyExpense.aggregate([
    {
        $group: {
            _id: '$category',
            total: { $sum: "$value" }
        }
    }, { $project: { _id: 1, total: 1 } }

],

    (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result)
        }
    }


)
})

module.exports = DailyExpense