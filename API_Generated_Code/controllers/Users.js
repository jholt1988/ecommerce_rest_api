'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.getUserByUserName = function getUserByUserName (req, res, next, username) {
  Users.getUserByUserName(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserOrderByOrderId = function getUserOrderByOrderId (req, res, next, userId, orderId) {
  Users.getUserOrderByOrderId(userId, orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserOrders = function getUserOrders (req, res, next, userId) {
  Users.getUserOrders(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next, username) {
  Users.updateUser(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
