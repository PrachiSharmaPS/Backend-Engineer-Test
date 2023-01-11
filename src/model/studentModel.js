const mongoose= require("mongoose")


const studentSchema= new mongoose.Schema(
{
    name:{type:String,
        required:true,trim:true},
    subject:{type:String,
        required:true,trim:true},
    marks:{type:Number,
        required:true},
    isDeleted:{type:Boolean,
        default:false},
    deletedAt:{type:Date}
}
)
module.exports=mongoose.model("student",studentSchema)