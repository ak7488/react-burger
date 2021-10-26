import React, { useEffect } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as action from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = (props) => {
  const { fetchOrders, token, userId } = props;
  useEffect(() => {
    fetchOrders(token, userId);
  }, [fetchOrders, token, userId]);

  let fetchOrLoading = <Spinner />;
  if (!props.loading) {
    fetchOrLoading = props.orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    ));
  }
  return <div>{fetchOrLoading}</div>;
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.idToken,
    userId: state.auth.localId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (token, localId) =>
      dispatch(action.fetchOrders(token, localId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
