// connect data base with node js

const mongoose = require("mongoose");

const DB = "mongodb+srv://wadia:wadia@cluster0.gisb4s7.mongodb.net/USERSAuth?retryWrites=true&w=majority"; // Connection URI

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("MongoDB Connected")).catch((err)=>{
    console.log(err);
})


//SQenwjM2BkKkaHnE






















