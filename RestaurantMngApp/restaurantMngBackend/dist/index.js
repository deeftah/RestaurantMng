'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('./config/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

/**
 * Database
 */
(0, _db2.default)();

var PORT = process.env.PORT || 3000;

app.listen(PORT, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('App list to port: ' + PORT);
  }
});