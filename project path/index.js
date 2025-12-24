const express = require("express");
const port = 2009;

const path = require("path")

const app = express()


//middleware
const middle = (req,res,next)=>{
    console.log("hello i am middleware");
    next()
    
}
let data =[]

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

//style
app.use("/", express.static(path.join(__dirname, "public")))

app.get("/", (req,res)=>{
    res.render("index",{data})
})

app.post("/addData",middle,(req, res)=>{
    let obj = {
        id : Date.now(),
        ...req.body
}
data.push(obj)
res.redirect("/")
    
})

app.get("/deleteData/:id" , (req,res)=>{
    let newData = data.filter((item)=>item.id!=req.params.id)
    data=newData
    res.redirect("/")
})

app.get("/editData", (req,res)=>{
    let sigleData = data.find((item)=>item.id == req.query.id)
    res.render("edit", {sigleData})
})

app.post("/updateData", (req,res)=>{
    let sigleData = data.find((item)=> item.id == req.body.id)
    sigleData.name = req.body.name
    sigleData.email = req.body.email
    sigleData.password = req.body.password

    res.redirect("/")
})

app.listen(port, (err)=>{
    err ? console.log(err): console.log(`server started on port ${port}`);
    
})