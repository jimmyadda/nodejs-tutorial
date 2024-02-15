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

//fetch products
app.get('/products', async(req,res) => {
        try {
           const products = await Product.find({});
           res.status(200).json(products);


        } catch (error) {
            res.status(500).json({messsage: error.message})
        }
})

//fetch products by id
app.get('/products/:id', async(req,res) => {
        try {
            const {id} = req.params
           const product = await Product.findById(id);
           res.status(200).json(product);
           

        } catch (error) {
            res.status(500).json({messsage: error.message})
        }
})
//add products
app.post('/products', async(req,res) =>{
        try {
            const product = await Product.create(req.body);
            res.status(200).json(product);

        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message});
            
        }
})

//update a  products
app.put('/products/:id', async(req,res) => {
    try {
       const {id} = req.params
       const product = await Product.findByIdAndUpdate(id, req.body);

       if(!product){
        return res.status(404).json({messsage: `cannot find product with id ${'id'}` })
       }
       const updatedproduct = await Product.findById(id);

       res.status(200).json(updatedproduct);
       

    } catch (error) {
        res.status(500).json({messsage: error.message})
    }
})

//update a  products
app.delete('/products/:id', async(req,res) => {
    try {
       const {id} = req.params
       const product = await Product.findByIdAndDelete(id);

       if(!product){
        return res.status(404).json({messsage: `cannot find product with id ${'id'}` })
       }
       res.status(200).json(product);
       

    } catch (error) {
        res.status(500).json({messsage: error.message})
    }
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


 