const route = require("express").Router();
const {User} = require("../model/model")

route.post('/signup', async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
   
   await User.create({username, password})

    res.status(200).json({
      status:"OK",
      message : 'User created'
    })
})

module.exports = route