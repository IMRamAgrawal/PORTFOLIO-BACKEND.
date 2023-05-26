const express = require("express")
var cors = require('cors')
const User = require("./userdata")
require("./mongoose_connection")
const app = express()


 
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000;
app.post("/createuser", (req,res)=>{
let success = false

     
   
   
const user = User(req.body);
user.save()
success = true
res.json({success, message: "User Registered successfully"})


})
app.listen(port,()=>{
    console.log(`Example app listening at ${port}`)
})