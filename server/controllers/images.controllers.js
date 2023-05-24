const multer = require('multer');
const upload = require('../util/Upload');
const uploadImage = upload.single('image');
const Image = require('../models/image.model');
const ValidateImage = require('../validation/image');
const path = require('path');
const fs = require('fs');

module.exports = {
    Add: async(req, res) => {
        try {
            uploadImage(req, res, async function(err){
                const {errors, isValid} = ValidateImage(req)
                if (err) {
                    errors.image = err.message
                    return res.status(404).json(errors)
                }else{
                    // upload the image in DB
                    if (!isValid) {
                        return res.status(404).json(errors)
                    } else {
                        const image = {
                            title: req.body.title,
                            image: req.file.filename,
                            path: "http://localhost:8009" + "/images/" + req.file.filename
                        }
                        await Image.create(image)
                        await Image.find().then(result => {
                            res.status(200).json(result)
                        })
                    }
                }
            });
        } catch (error) {
            res.status(500).json({message: err.message})
        }
    },

    FindAll: async(req, res) => {     //this API for get All the Images from db 
        try {
            await Image.find()
            .then(result => {
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json({message: err.message})
        }
    },
    
    Delete: async(req, res) => {
        try {
            const image = await Image.findOne({ _id: req.params.id });                 //for getting the image ID 
            const link = path.join(                                                //for get the complete image path 
            __dirname,
            "../public",
            image.path.split("http://localhost:8009")[1].toString()
        );
        await fs.unlink(link, async(err) => {     //delete the image from the disck first  
            await Image.findByIdAndRemove({_id: req.params.id})      //then from the DB
            .then(async()=> {
                await Image.findOne()
                .then(data => {
                    res.status(200).json(data)
                })
            })
        })
        } catch (error) {
            res.status(500).json({message: err.message});
        }
    },
};