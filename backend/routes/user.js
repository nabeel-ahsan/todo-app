const route = require("express").Router();

route.post('/signin', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.status(200).json({
        username,password
    })
})

module.exports = route