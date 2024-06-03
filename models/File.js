const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const File = sequelize.define('File', {
    filename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    uploaderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = File;
