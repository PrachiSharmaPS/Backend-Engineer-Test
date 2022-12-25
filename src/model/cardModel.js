const mongoose = require('mongoose');
const objectId= mongoose.Schema.Types.ObjectId
const cardSchema = new mongoose.Schema( {
    cardNumber: {
        type: String,
        required:true,
        unique:true,
        trim:true
    },
    cardType: {
        type:String,
        required:true,
        enum:["REGULAR","SPECIAL"],
    },

    customerName: {
        type:String,
        required:true
    },
    status: {
        type:String,
        enum:["ACTIVE","INACTIVE"],
        default:"ACTIVE"
    },
    vision: {
        type:String,
        required:true
    },
    customerID: {
        type:objectId,
        ref:"customer",
        required:true
    },


},
 { timestamps: true });

module.exports = mongoose.model('card', cardSchema)