import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
    username : {
        type : String,
        required :true
    },
    
    email :{
        type : String,
        unique : true,
        required : true

    },
    password : {
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