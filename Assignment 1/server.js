/* File name: server.js
      Author: Daniel Zhuo
   Student #: 301330354
        Date: Oct 5, 2023
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();

app.listen(5000);
module.exports = app;

console.log('Server running at http://localhost:5000/');
