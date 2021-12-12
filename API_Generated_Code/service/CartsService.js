'use strict';


/**
 * add items to cart
 * add cart-item objects to cart object
 *
 * body CartItem  (optional)
 * returns Cart
 **/
exports.addCartItems = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "modified" : "2000-01-23T04:56:07.000+00:00",
  "id" : 1,
  "cartItems" : [ {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  }, {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  } ],
  "userid" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets an empty cart object
 * starts a new user cart
 *
 * userId String 
 * returns Cart
 **/
exports.createCartByUserId = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "modified" : "2000-01-23T04:56:07.000+00:00",
  "id" : 1,
  "cartItems" : [ {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  }, {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  } ],
  "userid" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets an empty cart object
 * starts a new user cart
 *
 * returns Cart
 **/
exports.createCartByUserName = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "modified" : "2000-01-23T04:56:07.000+00:00",
  "id" : 1,
  "cartItems" : [ {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  }, {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  } ],
  "userid" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * creates an order
 * creates an order object out of cart object
 *
 * body OrderModel order object (optional)
 * returns OrderModel
 **/
exports.createOrder = function(body) {
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
 * deletes user's current cart
 * clears cart-items from cart and deletes cart
 *
 * cartId Cart/properties/id id of cart to be delete
 * no response value expected for this operation
 **/
exports.deleteCartById = function(cartId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * deletes user's current cart
 * clears cart-items from cart and deletes cart
 *
 * userId String user of the cart to be deleted
 * cartId Integer id of cart to be delete
 * no response value expected for this operation
 **/
exports.deleteCartByUserId = function(userId,cartId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get user's active cart
 * gets current user's active cart
 *
 * cart status String get the cart with the active status (optional)
 * returns Cart
 **/
exports.getActiveCart = function(cart status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "modified" : "2000-01-23T04:56:07.000+00:00",
  "id" : 1,
  "cartItems" : [ {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  }, {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  } ],
  "userid" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get user's active cart
 * gets current user's active cart
 *
 * userId String user cart to fetch
 * cart status String get the cart with the active status (optional)
 * returns Cart
 **/
exports.getActiveCartByUserId = function(userId,cart status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "modified" : "2000-01-23T04:56:07.000+00:00",
  "id" : 1,
  "cartItems" : [ {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  }, {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  } ],
  "userid" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * loads cart-items in cart
 * loads cart-items object into cart objects
 *
 * userId String userName of owner of cart
 * cartId Integer id of cart to load cart-itmes
 * returns Cart
 **/
exports.loadCartItemsByUserId = function(userId,cartId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "modified" : "2000-01-23T04:56:07.000+00:00",
  "id" : 1,
  "cartItems" : [ {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  }, {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  } ],
  "userid" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * loads cart-items in cart
 * loads cart-items object into cart objects
 *
 * userName https://api.swaggerhub.com/domains/holtenterprises/Ecommerce_Models/1.0#/parameters/userNameParam user cart to fetch
 * cartId Cart/properties/id id of cart to load cart-itmes
 * returns Cart
 **/
exports.loadCartItemsByUserName = function(userName,cartId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "modified" : "2000-01-23T04:56:07.000+00:00",
  "id" : 1,
  "cartItems" : [ {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  }, {
    "productId" : 1,
    "cartId" : 6,
    "id" : 1
  } ],
  "userid" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete item from cart
 * remove cart-item objects from cart object
 *
 * cartItemId Integer 
 * returns CartItem
 **/
exports.removeCartItem = function(cartItemId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "productId" : 1,
  "cartId" : 6,
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update cart-item to cart
 * update cart-item objects in cart object
 *
 * cartItemId Integer 
 * returns CartItem
 **/
exports.updateCartItem = function(cartItemId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "productId" : 1,
  "cartId" : 6,
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

