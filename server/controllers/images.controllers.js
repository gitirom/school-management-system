const multer = require('multer');
const upload = require('../util/Upload');
const uploadImage = upload.single('image');
const Image = require('../models/image.model');

module.exports = {
    Add: async(req, res) => {
        uploadImage(req, res, async function(err){
            if (err) {
                res.status(404).json({image: err.message})
            }else{
                // upload the image in DB
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
        })
    },
    FindAll: async(req, res) => {
        res.send("work");
    },
    Delete: async(req, res) => {
        res.send("work");
    }
}