//Setting up the base and importing custom created modules
const Router = require('express')
const router = new Router()
const controller = require('./purchaseController')



//creating route path with parameters , at the same time including blocks of code from Controller that was defined -- Registration/Login/Users
router.post('/purchase', controller.purchase)



//exporting the module
module.exports = router