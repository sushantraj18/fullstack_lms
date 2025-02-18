// admin register
import bcrypt from 'bcrypt'

import handleRes from "../helper/handleRes.js"
import adminModel from "../models/AdminModel.js"

export const adminRegister = async (req,res)=>{
    const {adminName,adminEmail,adminPassword}= req.body
    try{
        const checkUserAlreadyExist = await adminModel.findOne({adminEmail})

        if(checkUserAlreadyExist){
            return handleRes(res,400,"admin already register! try with diffrent email id")
        }


        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(adminPassword,salt)
        const createNewAdmin =  new adminModel({adminName,adminEmail,adminPassword:hashPassword,adminProfile :adminProfile.filename})
        await createNewAdmin.save()
        
        handleRes(res,200,"admin created successfully")


    }catch(e){
        console.log(e.message)
        handleRes(res,500,"somthing went wrong")
    }
}

// admin login


export const adminLogin = async(req,res)=>{

    const {adminEmail,adminPassword} = req.body;
    try{

        const checkMail = await adminModel.findOne({adminEmail})
        if(!checkMail){
            return handleRes(res,401,"invalid credentials ")
        }

        const checkPass = await bcrypt.compare(adminPassword,checkMail.adminPassword)
        if(!checkPass) {
            return handleRes(res,401,"invalid password")
        }

        handleRes(res,200,"Admin logged in successfully")

    }catch(e){
        
        console.log(e)
        return handleRes(res,500,"Somthing went wrong")

    }
}