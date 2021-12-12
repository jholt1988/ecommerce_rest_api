'use strict';

var utils = require('../utils/writer.js');
var Orders = require('../service/OrdersService');

module.exports.deleteOrderItem = function deleteOrderItem (req, res, next, orderItemId) {
  Orders.deleteOrderItem(orderItemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserOrderByOrderId = function getUserOrderByOrderId (req, res, next, userId, orderId) {
  Orders.getUserOrderByOrderId(userId, orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateOrderItem = function updateOrderItem (req, res, next, body, orderItemId) {
  Orders.updateOrderItem(body, orderItemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
