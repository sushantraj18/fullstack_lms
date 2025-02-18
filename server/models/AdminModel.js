import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
    adminName : {
        type : String,
        required : true
    },
    adminEmail : {
        type : String,
        unique : true,
        required : true
    },

    adminPassword : {
        type : String,
        rquired : true,
    },

    adminProfile :{
        type : String,
    }
},{timestamps:true})

const adminModel = mongoose.model("admin",adminSchema)

export default adminModel