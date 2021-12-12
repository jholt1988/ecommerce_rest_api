'use strict';


/**
 * deletes an item in order
 * remove an orderItem object in cart
 *
 * orderItemId OrderItemModel/properties/id 
 * no response value expected for this operation
 **/
exports.deleteOrderItem = function(orderItemId) {
  return new Promise(function(resolve, reject) {
    resolve();
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
  "userId" : "{}",
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
 * update an item in order
 * updates an orderItem object in cart
 *
 * body OrderItemModel  (optional)
 * orderItemId OrderItemModel/properties/id 
 * returns List
 **/
exports.updateOrderItem = function(body,orderItemId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "city" : "city",
  "cartId" : "{}",
  "shippingAddress2" : "shippingAddress2",
  "shippingAddress1" : "shippingAddress1",
  "userId" : "{}",
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
  "userId" : "{}",
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

