const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");

route.get("/", ctl.login);
route.post("/login", ctl.loginAdmin)
route.get("/logout", ctl.logout)

route.get("/dashbord", ctl.dashbord);

route.get("/addAdmin", ctl.addAdmin);
route.post("/addAdmin", ctl.addAdminData); 

route.get("/viewAdmin", ctl.viewAdmin);

route.get("/editData", ctl.editData);
route.post("/updateData", ctl.updateData)
route.get("/deleteData", ctl.deleteData);

module.exports = route;
