import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    studentName : {
        type : String,
        required : true,
    },

    studentEmail : {
        type : String,
        required : true,
        unique : true
    },

    studentPassword : {
        type : String,
        required : true,
    },

    profile :{
        type : String,
        required :true
    }
},{timestamps : true})

const studentModel = mongoose.model("student",studentSchema)

export default studentModel