const jwt = require("jsonwebtoken")

const JWTSECRET = "1234abcd"

function authMiddleware (req,res,next){
    try {
       
    const authHeader = req.headers.authorization
 
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        new Error("No token or invalid token");
    }
    const token = authHeader.split(' ')[1];
   
        const decoded = jwt.verify(token, JWTSECRET); 
       
        req.userId = decoded.userId; 
        
      
       
       
        next(); 
    } catch (error) {
       
       res.status(401).json({ message: error.message});
    }

 
}

module.exports = authMiddleware