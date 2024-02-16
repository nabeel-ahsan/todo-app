const route = require("express").Router();
const authMiddleware  = require("../middleware/authMiddleware");
const {User,Todo} = require("../model/model.js");


route.post('/todo', authMiddleware, async (req, res) => {
    
    try{
        const userId = req.userId;
        const {title,description} = req.body;
        const todo = await Todo.create({title: title, description: description, completed:false, userId: userId})
        await User.findByIdAndUpdate(userId, {  "$push":{"todos":todo._id}}, { 'new': true, 'upsert': true }
        )
      
     
      res.status(200).json({todo})
    }catch(e){
        console.log(e.message)
    }
})

module.exports = route