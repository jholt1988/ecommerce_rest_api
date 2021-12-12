'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.registerUser = function registerUser (req, res, next) {
  Auth.registerUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userLogin = function userLogin (req, res, next) {
  Auth.userLogin()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
