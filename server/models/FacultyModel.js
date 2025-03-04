import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
    facultyName : {
        type : String,
        required :true
    },
    
    facultyEmail :{
        type : String,
        unique : true,
        required : true

    },
    facultyPassword : {
        type : String,
        required : true,
    },


    profile :{
        type : String,
        required :true
    },

    adminId : {
        type : mongoose.Schema.ObjectId,
        ref : 'admin',
        required : true,
    }

},{timestamps:true})

const facultyModel = mongoose.model("faculty",facultySchema)

export default facultyModel