import * as actionType from "./actionTypes";

export const pruchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionType.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionType.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionType.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData, token) => {
  return {
    type: actionType.PURCHASE_BURGER,
    orderData,
    token,
  };
};

export const purchaseInit = () => {
  return {
    type: actionType.PURCHASE_INIT,
  };
};

export const fetchOrderStart = () => {
  return {
    type: actionType.FETCH_ORDER_START,
  };
};

export const fetchOrderSuccess = (order) => {
  return {
    type: actionType.FETCH_ORDER_SUCCESS,
    order: order,
  };
};

export const fetchOrderfail = (error) => {
  return {
    type: actionType.FETCH_ORDER_FAIL,
    error,
  };
};

export const fetchOrders = (token, userId) => {
  return {
    type: actionType.FETCH_ORDER,
    token,
    userId,
  };
};
