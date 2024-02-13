
const route = require("express").Router();
const {User} = require("../model/model");
const jwt = require("jsonwebtoken");

const JWTSECRET = "1234abcd"
route.post('/signup', async (req,res) => {
  try{

    const username = req.body.username;
    const password = req.body.password;
    
    const user =  await User.create({username, password})
    const token = jwt.sign({UserId:user._id},JWTSECRET )
    res.status(200).json({
      token : token
    })
  }catch(e){
    res.status(400).json({
      error:e.message
    })
  }
})

route.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
  
    if (!username || !password) {
      return res.status(403).json({
        msg: "User doesnt exist in our in memory db",
      });
    }
  
    var token = jwt.sign({ username: username }, JWTSECRET);
    return res.json({
      token,
    });
  });

module.exports = route