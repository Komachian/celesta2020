import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "redux/actions/authActions";

class AuthenticatedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const isAdmin = user ? true : false;
    console.log(isAdmin);

    return isAdmin ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: "/signin-page" }} />
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  error: state.error,
});

export default compose(connect(mapStateToProps, { loginUser }))(
  AuthenticatedRoute
);
