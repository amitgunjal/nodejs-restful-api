require("dotenv").config();
const mysql = require("mysql");


module.exports = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
});
