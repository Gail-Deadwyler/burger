var express = require("express");

var router = express.Router();

var burger_GD = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function (req, res) {
    burger_GD.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


// Export routes for server.js to use.
module.exports = router;

