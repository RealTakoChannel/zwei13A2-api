/**
 * This file is the entrance of the backend server
 * the file will call the controller api and start the server
 */

/**
 * import modules
 */
const express = require("express"); // import express
const databaseAPI = require("./controllerAPI/api-controller.js"); // import controller api
/**
 * initialize server
 */
const dataServer = express();

dataServer.use("/api", databaseAPI); // call the controller api

dataServer.listen(8888); // start the server at the port 8888
console.log("Server up and running on port 8888"); // send a log