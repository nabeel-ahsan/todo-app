const express = require("express");
const app = express();
const route = require("./routes/routes");
const dbConnection = require("./connection")

const dbUrl = "mongodb+srv://admin:LlWmI25vM9sGhQvj@cluster0.jpcty9g.mongodb.net/"

app.use(express.json());
dbConnection(dbUrl)
app.use("/api/v1", route);

app.listen(3000);
