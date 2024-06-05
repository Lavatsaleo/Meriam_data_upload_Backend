const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const User = require('./models/User');  // Import your models
const File = require('./models/File');  // Import the File model if used

dotenv.config();

const app = express();



// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static('uploads'));

// Routes
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/auth', authRoutes);
app.use('/files', fileRoutes);
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Sync Sequelize models
sequelize.sync()
    .then(() => console.log('Database connected and synced'))
    .catch(err => console.log('Error: ' + err));
