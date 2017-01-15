const bodyParser = require('body-parser');

let messages = [{message: 'hi there'}];

exports.index = function(req, res) {
  res.json(messages);
}

exports.create = function(req, res) {
  console.log(req.body)
  messages.push(req.body)
  res.json(messages);
}
