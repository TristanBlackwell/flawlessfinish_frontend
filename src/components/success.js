import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import icon from "../images/icon.svg";

class Success extends Component {
  render() {
    return (
      <div id="successPage">
        <div className="container">
          <div className="row">
            <div className="col s12 center">
              <NavLink to="/" exact>
                <img
                  src={icon}
                  width="25%"
                  height="auto"
                  alt="logo"
                  id="successLogo"
                />
              </NavLink>
            </div>
            <div className="row">
              <div className="col s12 center">
                <h1 id="successTitle">Payment successful!</h1>
              </div>
            </div>
            <div className="row" id="successTextContainer">
              <p id="successText" className="center">
                Thank you for your purchase.
                <br /> <br />
                Your payment is now being processed and we will deliver your
                voucher to you within the next few days.
              </p>
            </div>
            <div className="row center" id="returnHomeContainer">
              <NavLink to="/">
                <button
                  id="returnHome"
                  className="waves-effect waves-light btn-large"
                >
                  Return home
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
