
var mysql = require('mysql');
var connection = mysql.createConnection({
    host    :'localhost',
    user    :'root',
    password:'root',
    database:'games'
});

connection.connect(function(error) {
    if (error) {
        throw error;
    }
    console.log('Connected to MySQL server, as ID = ', connection.threadId);
});

module.exports = connection;