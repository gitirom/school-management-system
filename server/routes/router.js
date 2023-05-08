const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema");
var bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");




// create user Registration api

router.post("/register", async (req, res) => {

    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await userdb.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and Confirm Password Not Match" })
        } else {
            const finalUser = new userdb({
                name, email, password, cpassword
            });

            // password hashing part here
            const storeData = await finalUser.save();          

            //console.log(storeData);
            res.status(201).json({status:201,storeData});    // (201)indicates that the request has succeeded and has led to the creation of a resource.
        }
    } catch (error) {
        res.status(422).json(error);             // (422) indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.
        console.log("catch block error");
    }
});





//user Login 
router.post("/login", async(req,res) => {
    //console.log(req.body);
    const { email, password} = req.body;

    if ( !email || !password ) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {
        const userValid = await userdb.findOne({email:email})

        if(userValid){
            const isMatch = await bcrypt.compare(password,userValid.password);

            if(!isMatch){
                res.status(422).json({ error: "Invalid Details" })
            }else{
                //token generate
                const token = await userValid.generateAuthToken();

                //cookiegenerate
                res.cookie("usercookie", token,{
                    expires:new Date(Date.now() + 9000000),                  // The Expires HTTP header contains the date/time after which the response is considered expired.
                    httpOnly:true                                            //In a SPA(Single Page Application) Authentication JWT token either can be stored in browser 'LocalStorage' or in 'Cookie'. Storing the JWT token inside of the cookie then the cookie should be HTTP Only. The HTTP-ONly cookie nature is that it will be only accessible by the server application.
                });

                const result = {
                    userValid,
                    token
                }
                res.status(201).json({status:201,result});
            }
        }
    } catch (error) {
        res.status(401).json(error);
        console.log("catch block");
    }
});

//user Valid
router.get("/validuser",authenticate,async(req,res)=>{
    try {
        const ValidUserOne = await userdb.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
});

// router.get("/logout",authenticate,async(req,res)=>{
//     try {
//         req.rootUser.tokens =  req.rootUser.tokens.filter((curelem)=>{
//             return curelem.token !== req.token
//         });

//         res.clearCookie("usercookie",{path:"/"});

//         req.rootUser.save();

//         res.status(201).json({status:201})

//     } catch (error) {
//         res.status(401).json({status:401,error})
//     }
// })





module.exports = router;

// req.body : allows you to access data in a string or JSON object from the client side
// findOne :  finds and returns one document that matches the given selection criteria
//The save() function is used to save the document to the database.