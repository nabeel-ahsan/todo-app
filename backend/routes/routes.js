const route = require("express").Router();
const userRoute = require("./todo")
const todoRoute = require("./user")



route.use("/user", todoRoute)
route.use("/todos", userRoute)


module.exports = route