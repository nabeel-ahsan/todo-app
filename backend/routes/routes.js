const route = require("express").Router();
const userRoute = require("./todo")
const todoRoute = require("./user")



route.use("/user", todoRoute)
route.use("/todo", userRoute)


module.exports = route