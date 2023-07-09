const express = require("express");
const app = express();

require("dotenv").config();
PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

const blog = require("./routes/blog");
// mount 
app.use("/api/v1", blog);

const dbConnect = require("./config/database")
dbConnect();

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("<h1>Home page</h>")
})