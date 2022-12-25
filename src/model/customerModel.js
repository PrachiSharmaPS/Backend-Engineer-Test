const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        required: true,
        trim:true                                
    },
    lastName: {
        type: String,
        required: true,
        trim:true
    },
    mobileNumber:{
        type: String,
        requried: true,
        unique: true
    },
    DOB: {
        type: Date,
        requried: true,
        
    },
    emailID: {
        type: String,
        requried: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    customerID:{
        type: String,
        required: true
    },
    status: {
        type:String,
        enum:["ACTIVE","INACTIVE"],
        
    },
},
 { timestamps: true });

module.exports = mongoose.model('custome', customerSchema)