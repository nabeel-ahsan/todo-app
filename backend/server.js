const express = require("express");
const app = express();
const port = 3000;

// app.use('/api/v1/', (req,res) => {
    
// })

app.listen(port, () => {
    console.log(`Port is listening on port: ${port}`);
})