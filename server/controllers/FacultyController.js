import mongoose from 'mongoose'
import handleRes from '../helper/handleRes.js';
import facultyModel from '../models/FacultyModel.js';
import bcrypt, { genSalt } from 'bcrypt'

export const facultyRegister = async(req,res)=>{
    const {username,email,password}= req.body;
    const {adminId}= req.params
    const profile = req.file
    console.log(adminId)
    console.log(profile)
    try{

        if(!adminId){
            return handleRes(res,400,"please provide admin id")
        }

        if(!username || !email || !password || !adminId || !profile){
            return handleRes(res,400,"all field required")
        }

        const checkUser =  await facultyModel.findOne({email})

        if(checkUser){
            return handleRes(res,400,"faculty already register with this email")
        }

        const hashPassword = await bcrypt.hash(password,12)

        const createFaculty =  new facultyModel({username,email,password:hashPassword,profile : profile.filename,adminId})

        await createFaculty.save()

        return handleRes(res,201,"faculty created successfully")

    }catch(e){
        console.log(e)
        return handleRes(res,500,"somthing went wrong")
    }
}


export const facultyLogin = async (req,res)=>{
    const {email,password} = req.body
    try{
        const checkFaculty =   await facultyModel.findOne({email})
        
        if(!checkFaculty){
            return handleRes(res,404,"invalid credential")
        }

        const checkPassword = await bcrypt.compare(password,checkFaculty.password)

        if(!checkPassword){
            return handleRes(res,400,"invalid credential")
        }

        return handleRes(res,200,"logged in successfully")
    }catch(e){
        console.log(e)
        handleRes(res,500,"somthing went wrong")
    }
}