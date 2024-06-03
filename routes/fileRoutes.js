// routes/fileRoutes.js
const express = require('express');
const { uploadFile, downloadFile } = require('../controllers/fileController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/roles');
const router = express.Router();

router.post('/upload', authenticate, authorize(['uploader', 'admin']), uploadFile);
router.get('/download/:filename', authenticate, authorize(['downloader', 'admin']), downloadFile);

module.exports = router;
