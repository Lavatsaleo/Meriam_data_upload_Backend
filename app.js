const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const User = require('./models/User');  // Import your models
const File = require('./models/File');  // Import the File model if used
// const fileRoutes = require('./routes/fileRoutes');

dotenv.config();

const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// app.use('/auth', userRoutes);
// app.use('/files', fileRoutes); // Use file routes

// sequelize.sync().then(() => {
//     console.log('Database connected');
//     app.listen(3000, () => {
//         console.log('Server is running on port 3000');
//     });
// }).catch((error) => console.log(error));

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
