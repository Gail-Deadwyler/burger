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

//POST route to create/add a burger.
router.post("/api/burgers", function(req, res) {
    burger_GD.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  //PUT route to update burger devoured state.
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger_GD.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


// Export routes for server.js to use.
module.exports = router;

