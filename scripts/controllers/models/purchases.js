const mongoose = require ('mongoose')
const defaults = require('nodemon/lib/config/defaults')
const Schema = mongoose.Schema

const purchasesSchema = new Schema({
    
    CardNumber: {type: 'number'},
    ExpirationDate:{type: 'number'},
    CVV:{type: 'number'},
    Amount: {type: 'number'},

}) 


module.exports =  mongoose.model('Purchases', purchasesSchema)


