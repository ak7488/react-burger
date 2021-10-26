import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItem from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className="Toolbar">
    <DrawerToggle closeToggle={props.close} />
    <div className="Toolbar__Logo">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItem isAuthenticated={props.isAuthenticated} />
    </nav>
  </header>
);

export default toolbar;
