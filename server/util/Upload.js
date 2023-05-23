const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
        destination: "public/images/",
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) +    //this function for upload the image in the storage in my disk auto
            path.extname(file.originalname)
            cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    })

    //filter function for the  extension's 
    const filter = (file, cb) => {
        const fileType = /jpeg|png|jpg|pdf/
        const extname = fileType.test(path.extname(file.originalname))
        if (extname) {
            cb(null, true)
        }else{
            return cb(new Error('invalid mime type'))
        }
    }
    
    const upload = multer({ 
            storage: storage, 
            limits: {
                fileSize: 10000000
            },
            fileFilter: function(req, file, cb){
            filter(file, cb)
        },
    });

    module.exports = upload