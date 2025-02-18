import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDb from './server/database/db.js'
import adminRoute from './server/routes/AdminRoutes.js'
import studentRoute from './server/routes/StudentRoutes.js'
import facultyRoute from './server/routes/FacultyRoutes.js'



const app = express()
const PORT = process.env.PORT || 8000


// middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.set("view engine" , "ejs")

app.use("/api/lms/admin",adminRoute)
app.use("/api/lms",studentRoute)
app.use("/api/lms",facultyRoute)


app.all("*",(req,res)=>{
    res.render("404")
})

app.listen(PORT,()=>{
    connectDb()
    console.log(`server running at http://localhost:${PORT}`)
})