'use strict';


/**
 * Find user by userName
 * Returns a user based on userName
 *
 * username User/properties/username user's username
 * returns User
 **/
exports.getUserByUserName = function(username) {
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
 * Get a single order
 * Get a single order object
 *
 * userId User/properties/id 
 * orderId OrderModel/properties/id 
 * returns OrderModel
 **/
exports.getUserOrderByOrderId = function(userId,orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "city" : "city",
  "cartId" : "{}",
  "shippingAddress2" : "shippingAddress2",
  "shippingAddress1" : "shippingAddress1",
  "orderItems" : [ {
    "total" : 5,
    "quantity" : 5,
    "productId" : "{}",
    "orderId" : "{}",
    "price" : "{}",
    "id" : 1,
    "productName" : "{}"
  }, {
    "total" : 5,
    "quantity" : 5,
    "productId" : "{}",
    "orderId" : "{}",
    "price" : "{}",
    "id" : 1,
    "productName" : "{}"
  } ],
  "zipcode" : 6,
  "total" : 2,
  "id" : 0,
  "state" : "state",
  "complete" : false,
  "paymentInfo" : {
    "zipcode" : 3,
    "recieptId" : 9,
    "cardNum" : "cardNum",
    "total" : 2,
    "cardType" : "Visa",
    "id" : 7,
    "expDate" : "2000-01-23",
    "status" : "Approved"
  },
  "status" : "Approved"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of user orders by userId
 * Get a collection of user order
 *
 * userId String 
 * returns List
 **/
exports.getUserOrders = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "orders" : [ {
    "city" : "city",
    "cartId" : "{}",
    "shippingAddress2" : "shippingAddress2",
    "shippingAddress1" : "shippingAddress1",
    "orderItems" : [ {
      "total" : 5,
      "quantity" : 5,
      "productId" : "{}",
      "orderId" : "{}",
      "price" : "{}",
      "id" : 1,
      "productName" : "{}"
    }, {
      "total" : 5,
      "quantity" : 5,
      "productId" : "{}",
      "orderId" : "{}",
      "price" : "{}",
      "id" : 1,
      "productName" : "{}"
    } ],
    "zipcode" : 6,
    "total" : 2,
    "id" : 0,
    "state" : "state",
    "complete" : false,
    "paymentInfo" : {
      "zipcode" : 3,
      "recieptId" : 9,
      "cardNum" : "cardNum",
      "total" : 2,
      "cardType" : "Visa",
      "id" : 7,
      "expDate" : "2000-01-23",
      "status" : "Approved"
    },
    "status" : "Approved"
  }, {
    "city" : "city",
    "cartId" : "{}",
    "shippingAddress2" : "shippingAddress2",
    "shippingAddress1" : "shippingAddress1",
    "orderItems" : [ {
      "total" : 5,
      "quantity" : 5,
      "productId" : "{}",
      "orderId" : "{}",
      "price" : "{}",
      "id" : 1,
      "productName" : "{}"
    }, {
      "total" : 5,
      "quantity" : 5,
      "productId" : "{}",
      "orderId" : "{}",
      "price" : "{}",
      "id" : 1,
      "productName" : "{}"
    } ],
    "zipcode" : 6,
    "total" : 2,
    "id" : 0,
    "state" : "state",
    "complete" : false,
    "paymentInfo" : {
      "zipcode" : 3,
      "recieptId" : 9,
      "cardNum" : "cardNum",
      "total" : 2,
      "cardType" : "Visa",
      "id" : 7,
      "expDate" : "2000-01-23",
      "status" : "Approved"
    },
    "status" : "Approved"
  } ],
  "userId" : "{}"
}, {
  "orders" : [ {
    "city" : "city",
    "cartId" : "{}",
    "shippingAddress2" : "shippingAddress2",
    "shippingAddress1" : "shippingAddress1",
    "orderItems" : [ {
      "total" : 5,
      "quantity" : 5,
      "productId" : "{}",
      "orderId" : "{}",
      "price" : "{}",
      "id" : 1,
      "productName" : "{}"
    }, {
      "total" : 5,
      "quantity" : 5,
      "productId" : "{}",
      "orderId" : "{}",
      "price" : "{}",
      "id" : 1,
      "productName" : "{}"
    } ],
    "zipcode" : 6,
    "total" : 2,
    "id" : 0,
    "state" : "state",
    "complete" : false,
    "paymentInfo" : {
      "zipcode" : 3,
      "recieptId" : 9,
      "cardNum" : "cardNum",
      "total" : 2,
      "cardType" : "Visa",
      "id" : 7,
      "expDate" : "2000-01-23",
      "status" : "Approved"
    },
    "status" : "Approved"
  }, {
    "city" : "city",
    "cartId" : "{}",
    "shippingAddress2" : "shippingAddress2",
    "shippingAddress1" : "shippingAddress1",
    "orderItems" : [ {
      "total" : 5,
      "quantity" : 5,
      "productId" : "{}",
      "orderId" : "{}",
      "price" : "{}",
      "id" : 1,
      "productName" : "{}"
    }, {
      "total" : 5,
      "quantity" : 5,
      "productId" : "{}",
      "orderId" : "{}",
      "price" : "{}",
      "id" : 1,
      "productName" : "{}"
    } ],
    "zipcode" : 6,
    "total" : 2,
    "id" : 0,
    "state" : "state",
    "complete" : false,
    "paymentInfo" : {
      "zipcode" : 3,
      "recieptId" : 9,
      "cardNum" : "cardNum",
      "total" : 2,
      "cardType" : "Visa",
      "id" : 7,
      "expDate" : "2000-01-23",
      "status" : "Approved"
    },
    "status" : "Approved"
  } ],
  "userId" : "{}"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modifies a user object
 * Updates a user object
 *
 * username User/properties/username user's username
 * returns User
 **/
exports.updateUser = function(username) {
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

