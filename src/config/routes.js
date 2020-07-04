const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    const DailyExpense = require('../api/dailyExpense/dailyExpenseService')
    const Product = require('../api/product/productService')
    const PurchaseList = require('../api/purchaseList/purchaseListServer')

    DailyExpense.register(router, '/dailyExpense')
    Product.register(router, '/product')
    PurchaseList.register(router, '/purchaseList')

}