const express = require('express')

const app = express()


//route
app.get('/',(req,res) => {
    res.send("Hello client API")
})
app.listen(3000, ()=> {
    console.log("node api is running on port 3000")
})