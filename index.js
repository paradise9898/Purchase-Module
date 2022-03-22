const express = require('express')
const app = express();
const purchaseRouter = require('./scripts/controllers/purchaseRouter')
const mongoose = require('mongoose');
const path = require('path')
const PORT = process.env.PORT ||8888
const  XMLHttpRequest = require('xhr2');

//encoding
app.use(express.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.use(express(__dirname + '/views'))
app.use("/public", express.static(path.join(__dirname, 'public')));


app.use('/api', purchaseRouter)


 app.get('/', function(req, res) {
   res.render('main')
})


app.post('/thanku', async (req, res) => {
    
    const formData  = JSON.stringify( req.body);
    console.log(formData);
    const  http = new XMLHttpRequest();
    const  url = "https://testwork9.herokuapp.com/api/purchase"
    const  method = "POST";
    const  data = formData

    http.open(method, url,);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function(){
      if (http.readyState === XMLHttpRequest.DONE && http.status === 201){
        console.log(JSON.parse(http.responseText));
      }
    }

    http.send(data);
    return res.render('thanku')
    
 })
 
 

async function go() {

try {
    await mongoose.connect('mongodb+srv://test:qwerty12345@testwork.k9sza.mongodb.net/test?retryWrites=true&w=majority')
} catch (error) {
    console.log(error);
}
}


app.listen(PORT, function(req, res) {
    console.log(`http://localhost:${PORT}`);
})

go()

