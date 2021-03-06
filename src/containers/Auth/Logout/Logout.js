import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as action from "../../../store/actions/index";

const Logout = (props) => {
  const { logout } = props;

  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(action.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
