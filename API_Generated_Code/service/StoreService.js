'use strict';


/**
 * Adds a new inventory object to database
 * Adds new inventory item
 *
 * returns Product
 **/
exports.addInventoryItem = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "desciption" : "An automatic tennis ball launcher that allows our fur baby to play a game by themselves by launching a tennis ball ",
  "vendor" : "{}",
  "price" : 0,
  "id" : 83,
  "product_name" : "Automatic Tennis Ball Launcher"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * removes inventory object in database
 * deletes inventory item
 *
 * inventoryId Product/properties/id 
 * no response value expected for this operation
 **/
exports.deleteInventoryItem = function(inventoryId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a complete list of items in inventory
 * Get a complete list of inventoryItem objects
 *
 * returns List
 **/
exports.getAllInventoryItems = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "desciption" : "An automatic tennis ball launcher that allows our fur baby to play a game by themselves by launching a tennis ball ",
  "vendor" : "{}",
  "price" : 0,
  "id" : 83,
  "product_name" : "Automatic Tennis Ball Launcher"
}, {
  "desciption" : "An automatic tennis ball launcher that allows our fur baby to play a game by themselves by launching a tennis ball ",
  "vendor" : "{}",
  "price" : 0,
  "id" : 83,
  "product_name" : "Automatic Tennis Ball Launcher"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * updates/modifies inventory object in database
 * updates/modifies inventory item
 *
 * inventoryId Product/properties/id 
 * returns Product
 **/
exports.updateInventoryId = function(inventoryId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "desciption" : "An automatic tennis ball launcher that allows our fur baby to play a game by themselves by launching a tennis ball ",
  "vendor" : "{}",
  "price" : 0,
  "id" : 83,
  "product_name" : "Automatic Tennis Ball Launcher"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

