const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    const DailyExpense = require('../api/dailyExpense/dailyExpenseService')
    const Product = require('../api/product/productService')

    DailyExpense.register(router, '/dailyExpense')
    Product.register(router, '/product')

}