import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  componentDidMount() {
    M.Sidenav.init(this.Sidenav);

    M.Sidenav.getInstance(this.Sidenav);
    this.setState({ status: "" });
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div id="contactPage">
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
              <a href="#!" className="brand-logo">
                Logo
              </a>
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
                  <NavLink to="/contact" className="navbarLink contactLink">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <i className="fab fa-facebook"></i>
                </li>
                <li>
                  <i className="fab fa-instagram"></i>
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
              <NavLink to="/contact" className="navbarLink sidenav-close">
                Contact
              </NavLink>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-facebook socialMobileLink"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-instagram socialMobileLink"></i>
              </a>
            </li>
          </ul>
        </div>
        <div id="contactHeader">
          <div className="container center">
            <h1>Need to get in touch?</h1>
            <h5>
              <i className="fas fa-at"></i>Send us an email below{" "}
              <i className="fas fa-phone-alt"></i>Phone us on{" "}
              <span style={{ textTransform: "lowercase" }}>01993 850886</span>
            </h5>
            <br />
          </div>
          <div className="divider "></div>
        </div>
        <div id="contactFormContainer" data-aos="zoom-in">
          <div className="container">
            <div className="row">
              <form
                className="col s12"
                onSubmit={this.submitForm}
                action="https://formspree.io/xnqgrpyw"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="full_name"
                      type="text"
                      className="validate"
                      name="full_name"
                    />
                    <label htmlFor="full_name">Full Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      name="email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="input-field col s6">
                    <input
                      id="phoneNumber"
                      type="text"
                      className="validate"
                      name="phone_number"
                    />
                    <label htmlFor="phoneNumber">Phone number</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="textarea"
                      type="email"
                      className="validate"
                      name="message"
                    />
                    <label htmlFor="textarea"> How can we help?</label>
                  </div>
                </div>

                <div className="row center">
                  <div className="input-field s12">
                    {status === "SUCCESS" ? (
                      <p>Thanks!</p>
                    ) : (
                      <button
                        type="submit"
                        id="submitForm"
                        value="Send"
                        className="waves-effect waves-light btn-large"
                      >
                        Send
                      </button>
                    )}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="divider smallDivider"></div>
        <br />
        <div id="conditionsInfo" className="center">
          <h4>- Cancellations - </h4>
          <ul>
            <li>
              Less than 24 hours’ notice before your appointment, you will be
              charged 50% of your treatment cost.
            </li>
            <br />
            <li>
              If you provide no notice, the full cost of your missed treatment
              will be payable.
            </li>
          </ul>

          <p>
            We understand sometimes situations cannot be foreseen. In both
            cases, extenuating circumstances will be considered, but the final
            decision will be at the sole discretion of Flawless Finish.
          </p>
        </div>
        <div className="row" id="contactFooter">
          <div className="col s12 m6" id="mapContainer" data-aos="flip-left">
            <a
              href="https://www.google.co.uk/maps/place/Polished+Hair+Salon/@51.7266328,-1.5483099,17z/data=!3m1!4b1!4m5!3m4!1s0x487135c92c7b5c35:0x78739b34dfdac998!8m2!3d51.7266295!4d-1.5461212?hl=en-GB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="map"></div>
            </a>
          </div>
          <div className="col s12 m6" id="contactBottom" data-aos="flip-right">
            <div className="container center">
              <div>Logo</div>
              <h5>The stores, Market square / Bampton OX18 2JJ</h5>
              <h5>01993 850886 / flawlessfinish@email.com</h5>
              <br />
              <a href="#!">Need directions?</a>
              <h6>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
              </h6>
              <button className="waves-effect waves-light btn-large">
                Book Flawless
              </button>
              <div id="contactCopyright">
                <p>© 2020 Flawless</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
