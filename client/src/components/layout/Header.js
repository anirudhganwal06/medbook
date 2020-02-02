import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authActions";

function Header(props) {
  return (
    <header id="header">
      <div className="container-fluid">
        <div id="logo" className="pull-left">
          <h1>
            <Link to="/" className="scrollto">
              MEDBOOK
            </Link>
          </h1>
        </div>

        <nav id="nav-menu-container">
          {props.auth.isAuthenticated ? (
            <ul className="nav-menu">
              <li>
                <Link to="/timeline">MY TIMELINE</Link>
              </li>
              <li>
                <Link to="/my-profile">MY PROFILE</Link>
              </li>
              <li>
                <Link to="/contact-us">CONTACT</Link>
              </li>
              <li>
                <span
                  className="text-white pointerCursor"
                  onClick={props.logoutUser}
                >
                  LOGOUT
                </span>
              </li>
            </ul>
          ) : (
            <ul className="nav-menu">
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Header);
