const express = require("express");
const router = new express.Router();

// create user Registration api

router.post("/register", async(req,res) => {
    console.log(req.body);
});

module.exports = router;