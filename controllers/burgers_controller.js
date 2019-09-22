var express = require("express");

var router = express.Router();

var burger_GD = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

  router.get("/burgers", function(req, res) {
    // express callback response by calling burger.selectAllBurger
    burger_GD.selectAll(function(data) {
      // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
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
  
  
  

// router.get("/", function (req, res) {
//     burger_GD.selectAll(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

//POST route to create/add a burger.
// router.post("/api/burgers", function(req, res) {
//     burger_GD.insertOne([
//       "burger_name", "devoured"
//     ], [
//       req.body.burger_name, req.body.devoured
//     ], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });

  //PUT route to update burger devoured state.
// router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
  
//     burger_GD.updateOne({
//       devoured: req.body.devoured
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });


// Export routes for server.js to use.
module.exports = router;

