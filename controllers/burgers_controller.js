var express = require("express");

var router = express.Router();

var burger_GD = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

  router.get("/burgers", function(req, res) {
    // express callback response by calling burger_GD.selectAll
    burger_GD.selectAll(function(data) {
      // wrapper for orm.js that using MySQL query callback will return data, render to index with handlebar
      res.render("index", { burgers: data });
    });
  });

  // post route -> back to index
router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for buger.addBurger
    burger_GD.insertOne(req.body.burger_name, function(result) {
      // wrapper for orm.js that using MySQL insert callback will return a log to console,
      // render back to index with handle
      console.log(result);
      res.redirect("/");
    });
  });

  // put route -> back to index
router.put("/burgers/update", function(req, res) {
    burger_GD.updateOne(req.body.burger_id, function(result) {
      // wrapper for orm.js that using MySQL update callback will return a log to console,
      // render back to index with handle
      console.log(result);
      res.redirect("/");
    });
  });

// Export routes for server.js to use.
module.exports = router;

