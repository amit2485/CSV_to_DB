require("dotenv").config()
const notFound = require("./middleware/not-found")

const express = require("express")
const app = express()

const connectDB = require("./db/connect")

const userRouter = require("./routes/userRoute")


app.get("/",(req,res) =>{
    res.send("hello world")
})


app.use(express.json())
app.use(express.static('./public'))
app.use("/uploads",userRouter)
app.use(notFound)

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, ()=> {
            console.log(`server running on port ${5000}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()