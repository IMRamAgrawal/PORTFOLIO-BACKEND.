const mongoose = require("mongoose")
// const users_collection = require("./userdata")
const dotenv = require('dotenv');
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "./.env") });
const DB = process.env.DATABASE
mongoose.connect(DB)
.then(()=> {console.log("connection successfull...")})
.catch((err)=> {console.log(err)});