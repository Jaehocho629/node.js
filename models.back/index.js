const mysql = require('mysql2/promise');
const { prototype } = require('mysql2/lib/connection');

module.exports = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'express_board',
    connectionLimit: 10

})