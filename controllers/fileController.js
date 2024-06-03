// controllers/fileController.js
const path = require('path');

const uploadFile = (req, res) => {
    if (!req.files) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = req.files.file;
    const uploadPath = path.join(__dirname, '../uploads', file.name);

    file.mv(uploadPath, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error uploading file' });
        }

        res.status(200).json({ message: 'File uploaded successfully' });
    });
};

const downloadFile = (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);

    res.download(filePath);
};

module.exports = { uploadFile, downloadFile };
