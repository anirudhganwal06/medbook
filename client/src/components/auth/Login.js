import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import InputGroup from "../common/InputGroup";
import { compose } from "redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aadhar: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/timeline');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/timeline');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  // componentWillReceiveProps(nextProps) {
    // if (nextProps.errors) {
      // this.setState({ errors: nextProps.errors });
    // } else {
      // this.props.clearErrors();
    // }
  // }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      aadhar: this.state.aadhar,
      password: this.state.password
    };
    this.props.loginUser(user);
  };

  render() {
    return (
      <div className="container login-bck">
        <div className="row login--s">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5 p-5">
              <div className="card-body">
                <h1 className="card-title text-center font-weight-bolder">
                  Sign In
                </h1>
                <form className="form-signin" onSubmit={this.onSubmit}>
                  {/* <div className="form-label-group my-5"> */}
                  <InputGroup
                    id="aadhar"
                    label="Aadhar Number"
                    type="text"
                    name="aadhar"
                    placeholder="Enter Aadhar Number"
                    value={this.state.aadhar}
                    onChange={this.onChange}
                    error={this.state.errors.aadhar}
                    required
                  />
                  <InputGroup
                    id="password"
                    label="OTP"
                    type="password"
                    name="password"
                    placeholder="Enter OTP"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={this.state.errors.password}
                    required
                  />
                  <button
                    className="btn btn-lg btn-success my-4  btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default compose(
  withRouter,
  connect(mapStateToProps, {loginUser, clearErrors})
)(Login); 
