var db = require('../db');
var controller = require('../controllers');

module.exports = {
  messages: {
    get: function(callback) {
      var queryString = 'SELECT * FROM messages';
      db.query(queryString, function(err, results) {
        callback(JSON.stringify(results));
      });
    }, // a function which produces all the messages
    post: function (data) {
      console.log('Hi, Im message model', data.message);
      var queryString = `INSERT INTO messages (message_text, room_name) VALUES ('${data.message}', '${data.roomname}')`;
      db.query(queryString, function(err, results) {
        if (err) {
          console.error('db query error: ', err);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM users';
      db.query(queryString, function(err, results) {
        callback(JSON.stringify(results));
      });
    },
    post: function (data) {
      console.log(data, 'I\'m from model');
      var queryString = `INSERT INTO users (username) VALUES (${data.username})`;
      db.query(queryString, function(err, results) {
        if (err) {
          console.error('db query error: ', err);
        }
      });
    }
  }
};

