import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";

import icon from "../images/icon.svg";
import giftVoucher from "../images/giftVoucher.png";

const stripePromise = loadStripe(
  "pk_live_51HNdwqD7DCIwJBgEGLH3kaqpRnZgc6eD2djHPk7X7c1QJqlVOdpsGxTZ8AmiSGsUt31OOOIOhcwNN1nXa8GBZpDh00FY8KtrA0"
);

class Vouchers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10,
      quantity: 1,
      delivery: false,
      deliveryType: "digital",
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleDeliveryChange = this.handleDeliveryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const form = document.getElementById("voucherForm");
    form.reset();
    this.setState({
      value: 10,
      quantity: 1,
      delivery: false,
      deliveryType: "digital",
    });
  }

  handleValueChange(event) {
    this.setState({ value: event.target.value });
  }

  handleQuantityChange(event) {
    this.setState({ quantity: event.target.value });
  }

  handleDeliveryChange() {
    this.setState({ delivery: !this.state.delivery });

    if (this.state.deliveryType === "digital") {
      this.setState({ deliveryType: "delivery" });
    } else {
      this.setState({ deliveryType: "digital" });
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;

    let price;
    switch (this.state.value) {
      case 10:
        price = "price_1HO1VRD7DCIwJBgERQnHhNLc";
        break;
      case 15:
        price = "price_1HO1WXD7DCIwJBgE6i25M3NC";
        break;
      case 20:
        price = "price_1HO1WrD7DCIwJBgExBie0TfI";
        break;
      case 25:
        price = "price_1HO1XCD7DCIwJBgEV1WwMMey";
        break;
      case 30:
        price = "price_1HO1XUD7DCIwJBgEoxLugoAD";
        break;
      case 35:
        price = "price_1HO1XrD7DCIwJBgEIlKjkzCx";
        break;
      case 40:
        price = "price_1HO1Y6D7DCIwJBgE8bCw1MDQ";
        break;
      case 45:
        price = "price_1HO1YWD7DCIwJBgEGZh2Mt4e";
        break;
      case 50:
        price = "price_1HO1YiD7DCIwJBgEeJNblG0i";
        break;
      case 60:
        price = "price_1HO1Z1D7DCIwJBgEdsBvxCYE";
        break;
      case 70:
        price = "price_1HO1ZJD7DCIwJBgEloJUTlrW";
        break;
      case 80:
        price = "price_1HO1ZjD7DCIwJBgEl2d3Ee3L";
        break;
      case 90:
        price = "price_1HO1ZxD7DCIwJBgEzZO50ruX";
        break;
      case 100:
        price = "price_1HO1aDD7DCIwJBgEiQuzLRIZ";
        break;
      case 110:
        price = "price_1HO1aVD7DCIwJBgEh0r3Z8zo";
        break;
      case 120:
        price = "price_1HO1anD7DCIwJBgEHtPaJw26";
        break;
      case 130:
        price = "price_1HO1b5D7DCIwJBgEGzWshMMq";
        break;
      case 140:
        price = "price_1HO1bMD7DCIwJBgEmmOadSoJ";
        break;
      case 150:
        price = "price_1HO1bhD7DCIwJBgEbxIiG0K0";
        break;
      case 160:
        price = "price_1HO1bwD7DCIwJBgExa7zAyfp";
        break;
      case 170:
        price = "price_1HO1cCD7DCIwJBgE57P9PeFN";
        break;
      case 180:
        price = "price_1HO1cVD7DCIwJBgE3dA91geG";
        break;
      case 190:
        price = "price_1HO1ciD7DCIwJBgENTqKIfOF";
        break;
      case 200:
        price = "price_1HO1dID7DCIwJBgEXKRfDaeO";
        break;
      default:
        price = "price_1HO1VRD7DCIwJBgERQnHhNLc";
    }

    if (this.state.deliveryType === "digital") {
      document.getElementById("voucherForm").reset();
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: price, quantity: this.state.quantity }],
        mode: "payment",
        successUrl: "https://www.flawlessfinishhair.co.uk/success",
        cancelUrl: "https://www.flawlessfinishhair.co.uk/vouchers",
      });
      console.log(error);
    } else {
      document.getElementById("voucherForm").reset();
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          { price: price, quantity: 1 },
          { price: "price_1HO1gdD7DCIwJBgEp2gRioeF", quantity: 1 },
        ],
        mode: "payment",
        successUrl: "https://www.flawlessfinishhair.co.uk/success",
        cancelUrl: "https://www.flawlessfinishhair.co.uk/vouchers",
        billingAddressCollection: "required",
      });
      console.log(error);
    }
  };

  render() {
    return (
      <div id="vouchersPage">
        <div className="navContainer" id="contactNavigation">
          <nav className="transparent no-shadows commonNav">
            <div className="nav-wrapper">
              <a
                href="#!"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i className="fas fa-bars"></i>
              </a>
              <NavLink to="/" className="brand-logo">
                <img src={icon} alt="logo" width="100%" height="100%" />
              </NavLink>
              <ul className="right hide-on-med-and-down">
                <li>
                  <NavLink to="/" className="navbarLink" exact>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="navbarLink">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" className="navbarLink">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/wellness-rooms" className="navbarLink">
                    Wellness Rooms
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/vouchers"
                    className="navbarLink sidenav-close vouchersLink"
                  >
                    Vouchers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="navbarLink">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/FlawlessFinishHairLTD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/flawlessfinishhair/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <ul
            ref={(Sidenav) => {
              this.Sidenav = Sidenav;
            }}
            className="sidenav"
            id="mobile-demo"
          >
            <li>
              <NavLink to="/" exact className=" navbarLink sidenav-close">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navbarLink sidenav-close">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="navbarLink sidenav-close">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wellness-rooms"
                className="navbarLink sidenav-close"
              >
                Wellness Rooms
              </NavLink>
            </li>
            <li>
              <NavLink to="/vouchers" className="navbarLink sidenav-close">
                Vouchers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navbarLink sidenav-close">
                Contact
              </NavLink>
            </li>
            <li>
              <a
                href="https://www.facebook.com/FlawlessFinishHairLTD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook socialMobileLink"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/flawlessfinishhair/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram socialMobileLink"></i>
              </a>
            </li>
          </ul>
        </div>
        <div id="voucherHeader">
          <div className="container center">
            <h1 id="voucherPageTitle">Gift Vouchers</h1>
          </div>
        </div>
        <div id="voucherSection" className="row container">
          <div className="col s12 m6" id="voucherImgContainer">
            <img
              id="voucherImg"
              src={giftVoucher}
              width="100%"
              height="auto"
              alt="gift voucher"
            />
          </div>
          <div className="col s12 m6" id="voucherTextSection">
            <h5>Flawless Finish Hair gift voucher</h5>
            <p>
              <br />
              Treat someone you know to a voucher for Flawless salon. Ranging
              from £10 - £200 a Flawless Voucher can be used across any
              purchases in the salon and lasts for a year from the purchase
              date. <br />
              <br />
              You can choose whether to have this sent digitally free of charge
              or to your address for £1.
            </p>
            <form onSubmit={this.handleSubmit} id="voucherForm">
              <label>
                Value:
                <select
                  id="valueInput"
                  value={this.state.value}
                  onChange={this.handleValueChange}
                >
                  <option value="10">£10</option>
                  <option value="15">£15</option>
                  <option value="20">£20</option>
                  <option value="25">£25</option>
                  <option value="30">£30</option>
                  <option value="35">£35</option>
                  <option value="40">£40</option>
                  <option value="45">£45</option>
                  <option value="50">£50</option>
                  <option value="60">£60</option>
                  <option value="70">£70</option>
                  <option value="80">£80</option>
                  <option value="90">£90</option>
                  <option value="100">£100</option>
                  <option value="110">£110</option>
                  <option value="120">£120</option>
                  <option value="130">£130</option>
                  <option value="140">£140</option>
                  <option value="150">£150</option>
                  <option value="160">£160</option>
                  <option value="170">£170</option>
                  <option value="180">£180</option>
                  <option value="190">£190</option>
                  <option value="200">£200</option>
                </select>
              </label>
              <label>
                Quantity:
                <br />
                <input
                  id="quantityInput"
                  type="text"
                  value={this.state.quantity}
                  onChange={this.handleQuantityChange}
                />
              </label>
              <br />
              <label>
                Delivery option:
                <select
                  value={this.state.deliveryType}
                  onChange={this.handleDeliveryChange}
                >
                  <option value="digital">Digital delivery - Free</option>
                  <option value="delivery">
                    Postal delivery - Royal mail £1
                  </option>
                </select>
              </label>
              <br />
              <input type="submit" value="Purchase" id="purchaseButton" />
            </form>
          </div>
        </div>
        <footer className="page-footer" id="serviceFooter" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col l4 m6 s12">
                <h5 className="darken-text-2">Where to find us</h5>
                <p className=" darken-text-2">
                  The Stores, <br /> Market Square, <br /> Bampton, <br /> OX18
                  2JJ
                </p>
              </div>
              <div className="col l4 offset-l4 m6 s12">
                <h5 className="text-darken-2">Salon hours </h5>
                <ul>
                  <li className="text-darken-2">Sun & Mon / Closed</li>
                  <li className="text-darken-2">Tue / 9AM - 5PM</li>
                  <li className="text-darken-2">Weds / 9AM - 6PM</li>
                  <li className="text-darken-2">Thur / 10AM - 8PM</li>
                  <li className="text-darken-2">Fri / 9AM - 6PM</li>
                  <li className="text-darken-2">Sat / 9AM - 3PM</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="footer-copyright">
            <div className="container black-text">© 2020 Flawless</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Vouchers;
