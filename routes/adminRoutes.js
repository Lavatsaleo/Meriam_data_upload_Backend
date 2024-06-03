// routes/adminRoutes.js
const express = require('express');
const { getAllFiles } = require('../controllers/adminController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/roles');
const router = express.Router();

router.get('/files', authenticate, authorize(['admin']), getAllFiles);

module.exports = router;
