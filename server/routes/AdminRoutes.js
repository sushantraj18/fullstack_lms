import express from 'express'
import { adminLogin, adminRegister } from '../controllers/AdminController.js'
import  handleImage  from '../multer/handleProfile.js'


const adminRoute = express.Router()

adminRoute.post("/register",handleImage.single("adminProfile"), adminRegister)
adminRoute.post("/login",adminLogin)

export default adminRoute