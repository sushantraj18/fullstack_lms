import express from 'express'
import { studentLogin, studentRegister } from '../controllers/StudentController.js'

const studentRoute = express.Router()

studentRoute.post("/register",studentRegister)
studentRoute.post("/login",studentLogin)

export default studentRoute