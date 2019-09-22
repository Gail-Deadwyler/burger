/**
 * Programming assignment:  Burger App
 * Developer:               Gail Deadwyler
 * Date Written:            9/21/19
 * Purpose:                 Eat the Burger is a restaurant app that lets users input the 
 *                          names of burgers they'd like to eat. Whenever a user submits a burger's name, the 
 *                          app will display the burger -- waiting to be devoured.
 * 
 *                          Code taken from MVC example inclass assignment and code snippets from GitHub
 *                           
 */

//Dependencies
var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as templating engine.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

//app.use(routes);

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
