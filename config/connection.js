//MySQL Connection information here
var mysql = require("mysql");

//Error: Failed to Connect using Heroku settings

// var connection = mysql.createConnection({
//   host: "otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "w1xhfzqlkpu5z5qc",
//   password: "had3lqv9p42xruqx",
//   database: "bgc57vchaaqso3aod"
// });

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "dracomalfoy",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
