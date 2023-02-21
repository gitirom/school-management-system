const express = require("express");

const app = express();
require("./db/conn");
const port = 8009;

app.get("/", (req, res) => {
    res.status(201).json("server created")
});

app.listen(port, () => {
    console.log(`server started in port ${port}`)
});