import express from 'express'
import { facultyLogin, facultyRegister } from '../controllers/FacultyController.js'
import handleImage from '../multer/handleProfile.js'

const facultyRoute = express.Router()

facultyRoute.post("/register/:adminId",handleImage.single('profile'),facultyRegister)
facultyRoute.post("/login",facultyLogin)

export default facultyRoute