'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mysql = require('mysql');

exports.default = function () {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Liewec.mays!124',
    database: 'restaurantmng'
  });

  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connection.threadId);
  });
};