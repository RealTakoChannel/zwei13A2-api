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
router.get("/getActiveFundraiser", (req, res) => { // use express router to make a GET API
    connection.query( // mysql query
        "SELECT * FROM `FUNDRAISER` where ACTIVE = '1'", // select data which is activated
        (err,result,fields)=>{ // get result
            if(err){ // if error occurred
                console.error("An error occurred while querying FUNDRAISER", err) // send an error message
            }
            else{
                res.send(result); // send result
            }
        }
    )
});

/**
 * Get Categories
 * The following part will get some categories for the search page.
 */

/**
 * GET CATEGORY
 *
 */
router.get("/getCategory", (req, res)=>{
    connection.query(
        "SELECT DISTINCT `NAME` FROM `CATEGORY`",
        (err, result, fields)=>{
            if(err){
                console.error("An error occurred while querying categories", err);
            }
            else{
                res.send(result);
            }
        });
});
router.get("/getOrganizer", (req, res)=>{
    connection.query(
        "SELECT DISTINCT `ORGANIZER` FROM `FUNDRAISER`",
        (err, result, fields)=>{
            if(err){
                console.error("An error occurred while querying organizers", err);
            }
            else{
                res.send(result);
            }
        });
});

/**
 * GET Specific category fundraiser
 * This method will need user select specific category to search fundraisers
 */
router.get

// Export router
module.exports = router;