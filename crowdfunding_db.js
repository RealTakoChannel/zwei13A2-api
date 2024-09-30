/**
 * This file is used to establish a database connection.
 * this file will be load in api file.
 */

// import modules
const mysql = require('mysql2'); // import MySQL
const bodyParser = require("body-parser"); // import body-parser
const http = require("http"); // import http client

// import database details
var dbDetails = require('./db-details.js');

/**
 * This module is used to create a database connection.
 * The function will read the db-details file's information
 * and establish the connection.
 *
 * @type {{getConnection: (function(): Connection)}}
 */
module.exports = {
    getConnection: ()=>{ // The anonymous function is used to establish a database connection
        console.log("Connected!")
        return mysql.createConnection({
            host: dbDetails.host,
            user: dbDetails.user,
            password: dbDetails.password,
            database: dbDetails.database
        });
    }
};
