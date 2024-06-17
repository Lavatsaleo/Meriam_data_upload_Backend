const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), (req, res) => {
    try {
        res.status(200).send({ message: 'File uploaded successfully', file: req.file });
    } catch (error) {
        res.status(500).send({ message: 'Failed to upload file', error });
    }
});

module.exports = router;
