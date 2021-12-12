'use strict';


/**
 * Operation to register a new user
 * creates a new user object/record
 *
 * body User the new userName
 * returns User
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zipCode" : 67206,
  "password" : "passWord!",
  "address" : "123 E. Main",
  "role" : "admin",
  "city" : "Wichita",
  "address_2" : "apt 905",
  "last_name" : "Test",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "state" : "Kansas",
  "first_name" : "User",
  "username" : "newTestUser"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Operation To Login A User
 * Logins In A Registered User
 *
 * body User userName of user logging in
 * returns User
 **/
exports.userLogin = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zipCode" : 67206,
  "password" : "passWord!",
  "address" : "123 E. Main",
  "role" : "admin",
  "city" : "Wichita",
  "address_2" : "apt 905",
  "last_name" : "Test",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "state" : "Kansas",
  "first_name" : "User",
  "username" : "newTestUser"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

