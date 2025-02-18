import mongoose from 'mongoose'

const uri = process.env.DB || ""


const connectDb = async()=>{
    if(!uri){
        return console.log("please provide connection string")
    }

    try{

        const conn = await mongoose.connect(uri)
        if(conn){
            console.log("db connected")
        }else{
            console.log("db connection fail")
        }

    }catch(e){
        console.error(e)
    }



}

export default connectDb