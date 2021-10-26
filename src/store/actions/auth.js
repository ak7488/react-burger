import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (idToken, localId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    localId: localId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  // localStorage.removeItem("token");
  // localStorage.removeItem("expirationData");
  // localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_INITIAL_LOGOUT,
  };
};

export const logoutSucced = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authLogout = (logoutTime) => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: logoutTime,
  };
};

export const auth = (email, password, isSingUp) => {
  return {
    type: actionTypes.AUTH_USER,
    email: email,
    password: password,
    isSingUp: isSingUp,
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK_INITIAL_STATE,
  };
};
