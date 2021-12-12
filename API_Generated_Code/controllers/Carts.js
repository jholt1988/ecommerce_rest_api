'use strict';

var utils = require('../utils/writer.js');
var Carts = require('../service/CartsService');

module.exports.addCartItems = function addCartItems (req, res, next, body) {
  Carts.addCartItems(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCartByUserId = function createCartByUserId (req, res, next, userId) {
  Carts.createCartByUserId(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCartByUserName = function createCartByUserName (req, res, next, userName) {
  Carts.createCartByUserName(userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createOrder = function createOrder (req, res, next, body) {
  Carts.createOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCartById = function deleteCartById (req, res, next, cartId) {
  Carts.deleteCartById(cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCartByUserId = function deleteCartByUserId (req, res, next, userId, cartId) {
  Carts.deleteCartByUserId(userId, cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActiveCart = function getActiveCart (req, res, next, cart status) {
  Carts.getActiveCart(cart status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActiveCartByUserId = function getActiveCartByUserId (req, res, next, userId, cart status) {
  Carts.getActiveCartByUserId(userId, cart status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loadCartItemsByUserId = function loadCartItemsByUserId (req, res, next, userId, cartId) {
  Carts.loadCartItemsByUserId(userId, cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loadCartItemsByUserName = function loadCartItemsByUserName (req, res, next, userName, cartId) {
  Carts.loadCartItemsByUserName(userName, cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeCartItem = function removeCartItem (req, res, next, cartItemId) {
  Carts.removeCartItem(cartItemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCartItem = function updateCartItem (req, res, next, cartItemId) {
  Carts.updateCartItem(cartItemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
