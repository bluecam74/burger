var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1", 
    port: 8889, 
    user: "root", 
    password: "root", 
    database: "burger_db", 
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connection as id " + connection.threadId);
});

module.exports = connection;
