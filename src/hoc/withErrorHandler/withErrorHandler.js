import React from "react";
import Aux from "../Auxe";
import Modal from "../../components/UI/Modal/Modal";
import useHttpErrorHandler from "../../hooks/http-error-handler";

const withErrorHandler = (WrapperComponent, axios) => {
  return (props) => {
    const [error, clearError] = useHttpErrorHandler(axios);

    return (
      <Aux>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrapperComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
