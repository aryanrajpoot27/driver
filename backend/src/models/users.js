const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    }
}) 

const Register = new mongoose.model("Register", adminSchema);

module.exports = Register;