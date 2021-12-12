'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.registerUser = function registerUser (req, res, next, body) {
  Auth.registerUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userLogin = function userLogin (req, res, next, body) {
  Auth.userLogin(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
