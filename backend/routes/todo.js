const route = require("express").Router();

const authMiddleware  = require("../middleware/authMiddleware");
const {User,Todo} = require("../model/model.js");

route.post('/todo', authMiddleware, async (req, res) => {
    const userId = req.userId;
    const {title,description} = req.body;
    const todo = await Todo.create({title: title, description: description, completed:false, userId: userId})
    res.json({
        todo
    })
})

module.exports = route