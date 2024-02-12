const route = require("express").Router();
const {User} = require("../model/model");
const jwt = require("jsonwebtoken");

route.post('/signup', async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
   
   await User.create({username, password})

    res.status(200).json({
      status:"OK",
      message : 'User created'
    })
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
  
    if (!username || !password) {
      return res.status(403).json({
        msg: "User doesnt exist in our in memory db",
      });
    }
  
    var token = jwt.sign({ username: username }, "shhhhh");
    return res.json({
      token,
    });
  });

module.exports = route