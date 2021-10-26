import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem Link="/" exact={true}>
      Burger builder
    </NavigationItem>
    {props.isAuthenticated && (
      <NavigationItem Link="/orders">Orders</NavigationItem>
    )}
    {props.isAuthenticated ? (
      <NavigationItem Link="/logout">Logout</NavigationItem>
    ) : (
      <NavigationItem Link="/auth">Authenticated</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
