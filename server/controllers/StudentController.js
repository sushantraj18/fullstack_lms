
import handleRes from "../helper/handleRes.js"
import studentModel from "../models/StudentModel.js"
import bcrypt from 'bcrypt'

// studentn register 

export const studentRegister = async (req,res)=>{
    const {studentName,studentEmail,studentPassword} = req.body
    try{

        const checkUser = await studentModel.findOne({studentEmail})

        if(checkUser){
            return handleRes(res,401,"email is already exists please try with diffrent email")
        }

        const hashPassword = await bcrypt.hash(studentPassword,12)
        
        const createStudent = new studentModel({studentName,studentEmail,studentPassword:hashPassword})

        await createStudent.save()
        
        return handleRes(res,201,"student created successfully")


    }catch(e){
        console.log(e)
        return handleRes(res,500,"something went wrong")

    }
}


// student login

export const studentLogin = async (req,res) =>{
    const {studentEmail,studentPassword} = req.body;
    try{
        const checkStudent = await studentModel.findOne({studentEmail})

        if(!checkStudent){
            return handleRes(res,404,"invalid credential")
        }

        const checkPassword = await bcrypt.compare(studentPassword,checkStudent.studentPassword)

        if(!checkPassword){
            return handleRes(res,400,"invalid credential")
        }

        return handleRes(res,200,"logged in successfully")

    }catch(e){
        console.log(e)
        handleRes(res,500,"something went wrong")
    }
}

