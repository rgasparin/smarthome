var mysql = require('mariadb');

var connection = mysql.createPool({
 connectionLimit: 100,
 host:'localhost',
 user:'smarthome',
 password:'smarthome2390',
 //database:'smarthomedb',
 //port: 3306,
 //debug: false,
 //multipleStatements: true
});

module.exports.connection = connection;