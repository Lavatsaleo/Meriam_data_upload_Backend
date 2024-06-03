// controllers/adminController.js
const fs = require('fs');
const path = require('path');

const getAllFiles = (req, res) => {
    const directoryPath = path.join(__dirname, '../uploads');

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving files' });
        }

        res.status(200).json({ files });
    });
};

module.exports = { getAllFiles };
