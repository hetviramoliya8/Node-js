const Schema = require("../model/firstSchema")

module.exports.addData = async (req,res)=>{
   await Schema.create(req.body).then((data)=>{
   res.json({"msg": "Data added successfully...!", "data":data})
   })
}

module.exports.getData = async(req,res)=>{
    await Schema.find({}).then((data)=>{
        res.json({"data": data});
    });
}

module.exports.deleteData = async(req,res)=>{
    await Schema.findByIdAndDelete(req.query.id).then((data)=>{
        res.json({"msg": "Data deleted successfully...!", "data":data});
    });
}

module.exports.updateData = async(req,res)=>{
    await Schema.findByIdAndUpdate(req.body._id, req.body).then((data)=>{
        res.json({"msg": "Data update successfully....!", "data" : data})
    })
}

module.exports.loginData = async(req,res)=>{
    const { email, password } = req.body;
    try {
        const user = await Schema.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ "msg": "User not found!" });
        }
        if (user.password !== password) {
            return res.status(401).json({ "msg": "Invalid password!" });
        }
        res.json({ "msg": "Login successful!", "data": user });
    } catch (err) {
        res.status(500).json({ "msg": "Server error!" });
    }
}