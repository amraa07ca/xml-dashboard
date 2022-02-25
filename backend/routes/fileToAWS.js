const router = require('express').Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const Community = require('../models/community.model');

// Base /upload
aws.config.update({
    secretAccessKey: '3g923uRegDrw0S1UeucyFxLUXU1o44rQEs4EjLgR',
    accessKeyId: 'AKIAJEEYFVOVR46DGCDQ',
    region: 'us-east-1'
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'dashboardgka',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: 'Testing meta data' });
        },
        key: function (req, file, cb) {
            const fullPath = req.params.userID + "/" + Date.now().toString() + "-" + file.originalname;
            cb(null, fullPath);
        }
    }),
    fileFilter: fileFilter
});

// router.post("/:userID/:itemID", upload.array('images'), async (req, res) => {
//     try {
//         const community = await Community.findByIdAndUpdate(req.params.itemID, {
//             $push: {gallery: req.files}
//         });
//         const newGallery = new newGallery({
//             originalname: req.files,
//             location: req.files,
//             size: req.files,
//         });
//         res.json({'files': req.files});
//     } catch (err) {
//         res.status(400).json('Error: ' + err);
//     }
// });

router.post("/:userID/:itemID", async (req, res) => {
    try {
        console.log(req.files);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
    // const params = {
    //     Bucket: 'dashboardgka',
    //     Key: `${Date.now().toString()}-${req.body.filename}`,
    //     ContentType: req.body.contentType,
    // };

    // s3.getSignedUrl('putObject', params, (err, url) => {
    //     res.status(200).json({
    //         method: 'put',
    //         url,
    //         fields: {},
    //     });
    // });
});

module.exports = router;

