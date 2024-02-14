const express = require('express');
const mongoose = require('mongoose');


const app = express();
// Using Node.js `require()`

app.use(express.json());
//route
app.get('/',(req,res) => {
    res.send("Hello client API")
})


app.post('/product', (req,res) =>{
    console.log(req.body);
    res.send(req.body);
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


 