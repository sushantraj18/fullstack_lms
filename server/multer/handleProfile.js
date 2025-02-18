import multer from 'multer'
import path from 'path'

// const publicDir = path.join("public")


    const storage = multer.diskStorage({
        destination : (req,file,cb)=>{

            let uploadDestination = '';

            if(req.baseUrl.includes("/admin")){
                uploadDestination = 'public/adminProfile'
            }else if (req.baseUrl.includes('/faculty')){
                uploadDestination = 'public/facultyProfile'
            }else if (req.baseUrl.includes('/student')){
                uploadDestination = 'pbulic/studentProfile'
            }else{
                return cb(new Error('invalid route'),false)
            }

            cb(null,uploadDestination)
            
        },
        filename : (req,file,cb)=>{
            cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname))
        }
    })
    

export default multer({storage:storage})


