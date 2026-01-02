const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    catagory :{
        type : Number,
        required : true 
    },   
    prize :{
        type : Number,
        required : true 
    },   
    Author :{
        type : String,
        required : true 
    }   

})
const firstschema = mongoose.model("Books", Schema)

module.exports = firstschema