"use strict";

var express = require('express');

var app = express();

var purchaseRouter = require('./scripts/controllers/purchaseRouter');

var mongoose = require('mongoose');

var path = require('path');

var PORT = process.env.PORT || 8888;

var XMLHttpRequest = require('xhr2'); //encoding


app.use(express.json());
app.use(express.json({
  extended: true
}));
app.use(express.urlencoded());
app.set('view engine', 'pug');
app.use(express(__dirname + '/views'));
app.use("/public", express["static"](path.join(__dirname, 'public')));
app.use('/api', purchaseRouter);
app.get('/', function (req, res) {
  res.render('main');
});
app.post('/thanku', function _callee(req, res) {
  var formData, http, url, method, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          formData = JSON.stringify(req.body);
          console.log(formData);
          http = new XMLHttpRequest();
          url = "https://testwork9.herokuapp.com/  api/purchase";
          method = "POST";
          data = formData;
          http.open(method, url);
          http.setRequestHeader('Content-Type', 'application/json');

          http.onreadystatechange = function () {
            if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
              console.log(JSON.parse(http.responseText));
            }
          };

          http.send(data);
          return _context.abrupt("return", res.render('thanku'));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
});

function go() {
  return regeneratorRuntime.async(function go$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect('mongodb+srv://test:qwerty12345@testwork.k9sza.mongodb.net/test?retryWrites=true&w=majority'));

        case 3:
          _context2.next = 8;
          break;

        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 5]]);
}

app.listen(PORT, function (req, res) {
  console.log("http://localhost:".concat(PORT));
});
go();