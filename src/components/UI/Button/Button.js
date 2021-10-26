import React from "react";
import "./Button.css";

const button = (props) => {
  const button = "Button";
  const propbutton = props.btnType;
  return (
    <button
      onClick={props.clicked}
      disabled={props.disabled}
      className={"Button " + propbutton}
    >
      {props.children}
    </button>
  );
};

export default button;
