import {
  logoutsaga,
  chedkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSage,
} from "./auth";
import { initIngredientsSaga } from "./burgerBuilder";
import { purchaseBurgerSaga, fetchOrderSaga } from "./order";
import { takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";

export function* watchAuth() {
  yield takeEvery(actionType.AUTH_INITIAL_LOGOUT, logoutsaga);
  yield takeEvery(actionType.AUTH_CHECK_TIMEOUT, chedkAuthTimeoutSaga);
  yield takeEvery(actionType.AUTH_USER, authUserSaga);
  yield takeEvery(actionType.AUTH_CHECK_INITIAL_STATE, authCheckStateSage);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionType.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
  yield takeEvery(actionType.PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeEvery(actionType.FETCH_ORDER, fetchOrderSaga);
}
