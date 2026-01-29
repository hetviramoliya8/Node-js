const express = require("express")
const port = 1234;

const app = express()
const cors = require("cors")
const db = require("./Config/db")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",require("./routes/route"))



app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server started on port :", port);
})