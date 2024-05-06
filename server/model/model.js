const mongoose =require('mongoose');
const modelfields = new mongoose.Schema({

    

    fname:{
        type:String,
        required:true
    },
    sname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pnumber:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    selectedOption: String

    

})

const modelfieldsexport = mongoose .model("Marathondatacollection",modelfields);
module.exports = modelfieldsexport