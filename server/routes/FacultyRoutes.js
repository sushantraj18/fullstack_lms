import express from 'express'
import { facultyLogin, facultyRegister } from '../controllers/FacultyController.js'

const facultyRoute = express.Router()

facultyRoute.post("/register",facultyRegister)
facultyRoute.post("/login",facultyLogin)

export default facultyRoute