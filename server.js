const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

//middleware
app.use(express.json())
app.use(morgan("dev"))

//Change herbsId
mongoose.connect('mongodb://localhost:27017/herbsdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    ()=> console.log("connected to database")
)

//Change herbs
app.use("/mothersMed", require("./routes/mothersMedRouter.js"))

//Error Handling
app.use((err, req, res, next)=>{
    console.log({err: err.message})
    return res.send({errMsg: err.message})
})

app.listen(4500, ()=>{
    console.log("The server is running on port 4500")
})