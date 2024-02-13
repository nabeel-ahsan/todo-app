const express = require("express");
const app = express();
const route = require("./routes/routes");
const dbConnection = require("./connection")
require("dotenv").config()

const DATABASE_URL = process.env.DATABASE_URL
const PORT = process.env.PORT


app.use(express.json());
dbConnection(DATABASE_URL)
app.use("/api/v1", route);

app.listen(PORT, ()=> console.log(`Server is running on port number ${PORT}`));


