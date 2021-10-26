import React, { useState, useEffect } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import "./Auth.css";
import * as action from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { Redirect } from "react-router-dom";
import { updateObject, checkValidity } from "../../shared/utility";

const Auth = (props) => {
  const [AuthForm, setAuthForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Mail Adress",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });
  const [isSignUp, setIsSignUp] = useState(true);

  const { buildingBurger, authRedirectPath, onSetAuthRedirectPath } = props;

  useEffect(() => {
    if (!buildingBurger && authRedirectPath !== "/") {
      onSetAuthRedirectPath();
    }
  }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath]);

  const inputChangeHandler = (event, controlName) => {
    const updatedControls = updateObject(AuthForm, {
      [controlName]: updateObject(AuthForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          AuthForm[controlName].validation
        ),
        touched: true,
      }),
    });
    setAuthForm(updatedControls);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(AuthForm.email.value, AuthForm.password.value, isSignUp);
  };

  const isSignUpHandler = () => {
    setIsSignUp(!isSignUp);
  };

  const formElementArray = [];
  for (let key in AuthForm) {
    formElementArray.push({
      id: key,
      config: AuthForm[key],
    });
  }
  let form = formElementArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elemenConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      changed={(event) => inputChangeHandler(event, formElement.id)}
      invalid={!formElement.config.valid}
      shouldValidata={formElement.config.validation}
      touched={formElement.config.touched}
    />
  ));

  if (props.loading) {
    form = <Spinner />;
  }

  let errorMessage = null;

  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }

  let isAuthenticatedRedirect = null;

  if (props.isAuthenticated) {
    isAuthenticatedRedirect = <Redirect to={props.authRedirectPath} />;
  }
  return (
    <div className="Auth">
      {errorMessage}
      {isAuthenticatedRedirect}
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType="Success">Submit</Button>
      </form>
      <Button clicked={isSignUpHandler} btnType="Danger">
        Switch to {isSignUp ? "Sign In" : "Sign UP"}
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.idToken !== null,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(action.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(action.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
