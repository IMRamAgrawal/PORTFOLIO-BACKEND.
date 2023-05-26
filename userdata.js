const mongoose = require("mongoose");


const users_schema = new mongoose.Schema({
    Name:{
        type:String,
     
    },
    Email:{
        type:String,
 
    },
    PhoneNumber:{
        type:Number,
       
    },
    Message:{
        type:String,
      
       
    },


})


const users_collection = new mongoose.model("users_collection", users_schema)
module.exports = users_collection;