const jwt = require("jsonwebtoken")


function authMiddleware (req,res,next){
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    next()
}

module.exports = authMiddleware