"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Purchase = require('../controllers/models/purchases');

var PurchaseController =
/*#__PURE__*/
function () {
  function PurchaseController() {
    _classCallCheck(this, PurchaseController);
  }

  _createClass(PurchaseController, [{
    key: "purchase",
    value: function purchase(req, res) {
      var _req$body, ID, CardNumber, ExpirationDate, CVV, Amount, purchase;

      return regeneratorRuntime.async(function purchase$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              //defining if the user has same username as other pepole
              _req$body = req.body, ID = _req$body.ID, CardNumber = _req$body.CardNumber, ExpirationDate = _req$body.ExpirationDate, CVV = _req$body.CVV, Amount = _req$body.Amount; //finilize the user creation with username and hashed password

              purchase = new Purchase({
                ID: ID,
                CardNumber: CardNumber,
                ExpirationDate: ExpirationDate,
                CVV: CVV,
                Amount: Amount
              }); //saving data in db

              _context.next = 5;
              return regeneratorRuntime.awrap(purchase.save());

            case 5:
              return _context.abrupt("return", res.json({
                message: " успешно "
              }));

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              res.status(400).json({
                message: 'Registration error'
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]]);
    }
  }]);

  return PurchaseController;
}(); //exporting the module for usage in Routing


module.exports = new PurchaseController();