const mongoose  = require("mongoose")

function dbConnection(url){
    mongoose.connect(url).then(()=>console.log("Database connected"))
}

module.exports = dbConnection