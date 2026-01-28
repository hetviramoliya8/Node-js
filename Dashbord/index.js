const express = require("express")
const port = 2006;
const path = require("path")

const app = express()
const db = require("./config/db")
const cookie = require("cookie-parser")


app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use("/",express.static(path.join(__dirname,"public")))

app.use(cookie())

app.use("/",require("./routes/route"))

app.use("/deleteData",require("./routes/route"))

app.use("/editData", require("./routes/route"))

app.use("/updateData", require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err): console.log("Server started on port :", port);
    
})