const express = require("express")
const addUserData = require("../controllers/userController")
const router = express.Router()
const multer = require("multer")

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./public/uploads')
    },
    filename:(req,file,cb) => {
        cb(null,file.originalname)
    }
})

const upload = multer({ storage: storage });

router.post("/",upload.single('datasheet'),addUserData)

module.exports = router