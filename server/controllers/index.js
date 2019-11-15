var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      models.messages.get( function(results) {
        console.log('result from controller, yeeee', results);
        res.end(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('body', req.body);
      models.messages.post(req.body);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      models.users.get(function(results) {
        res.end(results);
      });
    },
    post: function (req, res) {
      // console.log(JSON.stringify(req.body.username));
      models.users.post(JSON.stringify(req.body));
      res.end();
    }
  }
};

