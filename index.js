const express = require('express');
const mongoose = require('mongoose');


const app = express();
// Using Node.js `require()`


//route
app.get('/',(req,res) => {
    res.send("Hello client API")
})

//route
app.get('/blog',(req,res) => {
    res.send("Hello blog client API")
})
var My_URl = "mongodb+srv://admin:admin@jimmymongo.g6j5tzh.mongodb.net/?retryWrites=true&w=majority";
My_URl = process.env.DATABASE_URL
console.log(process.env.NAME);
console.log(process.env.PROFESSION);
console.log(process.env.DATABASE_URL);

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


 