var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    console.log('error connection: ' + err.stack);
    return;
  }
  console.log('hey yo wassup ');

});

// export the database connection to use in models/index.js
module.exports = connection;