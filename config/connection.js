const { Sequelize } = require('sequelize');
const sequalize = require('sequelize');
require('dotenv').config();

let sequalize;
if (process.env.JAWSDB_URL) {
    sequalize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequalize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3001
        }
    );
}

module.exports = sequalize;