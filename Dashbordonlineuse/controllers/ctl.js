const Schema = require("../model/firstSchema");

module.exports.login = (req, res) => {
    res.render("login");
};

module.exports.loginAdmin = async (req,res)=>{
    let admin = await Schema.findOne({email : req.body.email})
    if(!admin){
        res.redirect("/")
    }
    if(admin.password == req.body.password){
        res.cookie("admin",admin)
        res.redirect("/dashbord")
    }else{
        res.redirect("/")
    }
}
module.exports.dashbord = (req, res) => {
    if(req.cookies.admin){
        res.render("dashbord");
    }else{
        res.redirect("/")
    }
};

module.exports.logout = (req,res)=>{
    res.clearCookie("admin")
    res.redirect("/")
}

module.exports.addAdmin = (req, res) => {
    
    res.render("addAdmin")
};

exports.addAdminData = async (req, res) => {
    await Schema.create(req.body);
    res.redirect("/viewAdmin");
};

module.exports.viewAdmin = async (req, res) => {
    const data = await Schema.find();   
    res.render("viewAdmin", { data });
   
};

module.exports.deleteData = async(req,res)=>{
    await Schema.findByIdAndDelete(req.query.id)
        res.redirect("/viewAdmin")
}

module.exports.editData = async(req,res)=>{
    let data = await Schema.findById(req.query.id)
    res.render("edit",{data})
}

module.exports.updateData = async(req,res)=>{
    await Schema.findByIdAndUpdate(req.body.id, req.body).then(()=>{
        res.redirect("/viewAdmin")
    })
}