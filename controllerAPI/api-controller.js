/**
 * This file is for the database API.
 */

// import required modules
const express = require('express');
const router = express.Router();
const database = require("../crowdfunding_db");
const connection = database.getConnection();

// Connect to database
connection.connect()

/**
 * The following part is for the database API
 * These api will be used to query the database
 */

/**
 * GET Active Fundraisers
 * This method will retrieve data and display in Home page
 */
router.get("/getActiveFundraisers",async (req, res) => { // use express router to make a GET API
    connection.query( // mysql query
        "SELECT * FROM FUNDRAISER where ACTIVE = '1'", // select data which is activated
        (err,result,fields)=>{ // get result
            if(err){ // if error occurred
                console.log("An error occurred while querying") // send an error message
            }
            else{
                res.send(result); // send result
            }
        }
    )
});
/**
 * GET All Categories
 */

// Export router
module.exports = router;