const Purchase = require('../controllers/models/purchases')

class PurchaseController {
    async purchase(req, res) {
        try {
            //defining if the user has same username as other pepole
            const {ID,CardNumber, ExpirationDate, CVV, Amount} = req.body;
         

            //finilize the user creation with username and hashed password
            const purchase = new Purchase({ID,CardNumber, ExpirationDate, CVV, Amount})

            //saving data in db
            await purchase.save()
            return res.json({message: " успешно "})
        } 
        //catching error logs if something goes wrong
        catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    
}

//exporting the module for usage in Routing
module.exports = new PurchaseController()