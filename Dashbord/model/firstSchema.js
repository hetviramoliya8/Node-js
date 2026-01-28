const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name:{
        type: String,
        require : true,
    },
    age:{
        type: Number,
        require : true,
    },
    email:{
        type: String,
        require : true,
    },
    password:{
        type: Number,
        require : true,
    },
})

const firstSchema = mongoose.model("student",Schema)

module.exports = firstSchema