// connect data base with node js

const mongoose = require("mongoose");

const DB = "mongodb+srv://RomdhaneWadia:RomAltas10@cluster0.w9jyial.mongodb.net/UsersLogin?retryWrites=true&w=majority"; // Connection URI

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})

