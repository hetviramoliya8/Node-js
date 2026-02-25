const Schema = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");

module.exports.register = async (req, res) => {
    let user = await Schema.findOne({ email: req.body.email });

    if (user) {
        return res.json({ msg: "User already registered" });
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.createdAt = moment().format("DD-MM-YYYY HH:mm:ss");

    await Schema.create(req.body).then((data) => {
        res.json({ msg: "User registered successfully", user: data });
    })
}

module.exports.login = async (req, res) => {
    let user = await Schema.findOne({ email: req.body.email });

    if (!user) {
        return res.json({ msg: "User not registered", auth: false });
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
        let token = jwt.sign({ user: user }, "rnw", { expiresIn: "1h" });
        // Set JWT in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // set true in production with HTTPS
            sameSite: "lax",
            maxAge: 60 * 60 * 1000, // 1 hour
        });

        res.json({ msg: "Login successful", token: token, user: user, auth: true });
    } else {
        res.json({ msg: "Invalid password", auth: false });
    }
}



