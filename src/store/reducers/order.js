import * as actionType from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  orders: [],
  loading: false,
  purchasing: false,
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId,
  };
  return updateObject(state, {
    loading: false,
    purchasing: true,
    orders: state.orders.concat(newOrder),
  });
};

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const purchaseBurgerfail = (state, action) => {
  updateObject(state, { loading: false });
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchasing: false });
};

const fetchOrderStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchOrderSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    orders: action.order,
  });
};

const fetchOrderFail = (state, action) => {
  return updateObject(state, { loading: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionType.PURCHASE_BURGER_FAIL:
      return purchaseBurgerfail(state, action);
    case actionType.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionType.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionType.FETCH_ORDER_START:
      return fetchOrderStart(state, action);
    case actionType.FETCH_ORDER_SUCCESS:
      return fetchOrderSuccess(state, action);
    case actionType.FETCH_ORDER_FAIL:
      return fetchOrderFail(state, action);
    default:
      return state;
  }
};

export default reducer;
