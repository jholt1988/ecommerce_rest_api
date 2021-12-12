'use strict';

var utils = require('../utils/writer.js');
var Store = require('../service/StoreService');

module.exports.addInventoryItem = function addInventoryItem (req, res, next, body) {
  Store.addInventoryItem(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteInventoryItem = function deleteInventoryItem (req, res, next, inventoryId) {
  Store.deleteInventoryItem(inventoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllInventoryItems = function getAllInventoryItems (req, res, next) {
  Store.getAllInventoryItems()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateInventoryId = function updateInventoryId (req, res, next, body, inventoryId) {
  Store.updateInventoryId(body, inventoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
