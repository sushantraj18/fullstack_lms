import mongoose from 'mongoose'
import handleRes from '../helper/handleRes.js';
import facultyModel from '../models/FacultyModel.js';
import bcrypt, { genSalt } from 'bcrypt'

export const facultyRegister = async(req,res)=>{
    const {facultyName,facultyEmail,facultyPassword,facultyCourse}= req.body;
    try{

        const checkUser =  await facultyModel.findOne({facultyEmail})

        if(checkUser){
            return handleRes(res,400,"faculty already register with this email")
        }

        const hashPassword = await bcrypt.hash(facultyPassword,12)

        const createFaculty =  new facultyModel({facultyName,facultyEmail,facultyCourse,facultyPassword:hashPassword})

        await createFaculty.save()

        return handleRes(res,201,"faculty created successfully")

    }catch(e){
        console.log(e)
        return handleRes(res,500,"somthing went wrong")
    }
}


export const facultyLogin = async (req,res)=>{
    const {facultyEmail,facultyPassword} = req.body
    try{
        const checkFaculty =   await facultyModel.findOne({facultyEmail})
        
        if(!checkFaculty){
            return handleRes(res,404,"invalid credential")
        }

        const checkPassword = await bcrypt.compare(facultyPassword,checkFaculty.facultyPassword)

        if(!checkPassword){
            return handleRes(res,400,"invalid credential")
        }

        return handleRes(res,200,"logged in successfully")
    }catch(e){
        console.log(e)
        handleRes(res,500,"somthing went wrong")
    }
}