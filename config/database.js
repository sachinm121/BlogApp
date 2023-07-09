const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useunifiedTopology:true,
    })
    .then(()=>{console.log("Connected to mongodb")})
    .catch((err) => {
        console.log("Server error");
        console.error(err.message);
        process.exit(1);
    })
}

module.exports = dbConnect;