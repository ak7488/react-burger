import React, { useState } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Auxe";
import "./Layout.css";
import Toolbar from "../Navigation/Toobar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const closeSideDrawerHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };
  return (
    <Aux>
      <Toolbar
        close={closeSideDrawerHandler}
        isAuthenticated={props.isAuthenticated}
      />
      <SideDrawer
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
        isAuthenticated={props.isAuthenticated}
      />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.idToken !== null,
  };
};

export default connect(mapStateToProps)(Layout);
