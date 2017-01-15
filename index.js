const express = require('express');
const app = express();
const messages = require('./controller.js')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', messages.index);
app.post('/', messages.create);

app.listen(4000)
