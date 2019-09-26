//MySQL Connection information here
var mysql = require("mysql");



var connection = mysql.createConnection({
  host: "i5x1cqhq5xbqtv00.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wib30w9wb0w2yvb1",
  password: "lhnab9zrrynbg0uu",
  database: "prxq0kbte4cpodjb"
});

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
//   connection.connect();
// } else {
//   var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "dracomalfoy",
//     database: "burgers_db"
//   });

// }



connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
