const express = require("express");
const app = express();
const port = 8080;




app.use((req , res) =>{
    console.log("server is working");
    res.send("server is listening");
})
app.listen(port , () =>{
    console.log(`✅ Server running on http://localhost:${port}`);

});

