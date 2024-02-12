const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
username : String,
password : String,
todos : [
    {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Todo"
    }
]
})

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed : Boolean,
    time : { type : Date, default: Date.now },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
})

const User = mongoose.model("User", userSchema)
const Todo = mongoose.model("Todo", todoSchema)

module.exports ={
    User,
    Todo
}

