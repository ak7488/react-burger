import { put, delay } from "redux-saga/effects";
// import { delay } from "redux-saga";
import * as actions from "../actions/index";
import axios from "axios";

export function* logoutsaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationData");
  yield localStorage.removeItem("userId");
  yield put(actions.logoutSucced());
}

export function* chedkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authdata = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  let authLink =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZHlPJUGzHmIpvAWlZ9OzrH4SR8mY1UMY";
  if (!action.isSingUp) {
    authLink =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZHlPJUGzHmIpvAWlZ9OzrH4SR8mY1UMY";
  }
  try {
    const response = yield axios.post(authLink, authdata);
    const expirationdate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("expirationData", expirationdate);
    yield localStorage.setItem("userId", response.data.localId);
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
    yield put(actions.authLogout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.authFail(error.response.data.error));
  }
}

export function* authCheckStateSage(action) {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationData")
    );
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      const userId = yield localStorage.getItem("userId");
      yield put(actions.authSuccess(token, userId));
      yield put(
        actions.authLogout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}
