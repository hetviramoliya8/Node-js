const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    // Prefer token from cookie, fallback to Authorization header
    let token = req.cookies && req.cookies.token;

    if (!token) {
        token = req.header("Authorization");
        if (!token) {
            return res.json({ msg: "Token not found" });
        }
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length);
        }
    }

    let newToken = token;
    try {
        let decode = jwt.verify(newToken, "rnw");
        req.user = decode.user;
        
    } catch (err) {
        return res.json(err);
    }
    next();
}

module.exports = auth;