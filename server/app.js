const express = require("express");

const app = express();
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser");


require("./db/conn");

const port = 8009;

app.get("/", (req, res) => {
    res.status(201).json("server created")
});

// for user registration

app.use(express.json());
app.use(cors());
app.use(cookiParser());
app.use(router);


app.listen(port, () => {
    console.log(`server started in port ${port}`)
});