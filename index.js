const express = require('express');
const mongoose = require('mongoose');
const Product  = require('./models/productModel');

const app = express();
// Using Node.js `require()`

app.use(express.json());
//route
app.get('/',(req,res) => {
    res.send("Hello client API")
})


app.post('/product', async(req,res) =>{
        try {
            const product = await Product.create(req.body);
            res.status(200).json(product);

        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message});
            
        }
})

//route
app.get('/blog',(req,res) => {
    res.send("Hello blog client API")
})
var My_URl = process.env.DATABASE_URL

//mongoose settings
mongoose.set("strictQuery",false);
 mongoose.connect(My_URl,
 { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true ,
  })
.then(() => {
    app.listen(3000, ()=> {
        console.log("node api is running on port 3000")
    });
    console.log("DB connected")

}).catch((error) => {
    console.log(error)
}) 


 