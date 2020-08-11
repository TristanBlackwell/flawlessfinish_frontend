import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import Treatments from "./Treatments";

import Query from "./Query";
import CATEGORIES_QUERY from "../queries/category/categories";

class Services extends Component {
  componentDidMount() {
    M.Sidenav.init(this.Sidenav);
    M.Sidenav.getInstance(this.Sidenav);
    M.Tooltip.init(this.tooltip);
  }

  render() {
    return (
      <div id="servicesPage">
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
                  <NavLink to="/services" className="navbarLink serviceLink">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/wellness-rooms" className="navbarLink">
                    Wellness Rooms
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="navbarLink">
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
        <div id="servicesHeader" className="center">
          <div id="servicesHero" className="center">
            <h1>Services</h1>
          </div>
          <p>
            All our stylists are fully qualified and have the confidence and
            experience to deliver the best quality in hair styling. <br />
            We have stylists of various experience and training which is
            reflected in the prices below. <br />
            <br />
            Our senior stylists are Katie and Kerry and our junior stylist is
            Wiki (Viki).
          </p>
          <div id="headerUnderline"></div>
        </div>
        <div id="servicePricing">
          <div id="bookingCTA" className="center">
            <a href="#!" className="waves-effect waves-light btn-large">
              Book Flawless
            </a>
          </div>
          <div>
            <Query query={CATEGORIES_QUERY} id={null}>
              {({ data: { categories } }) => {
                return (
                  <div id="treatments">
                    <div className="container">
                      {categories.map((category, i) => {
                        return (
                          <div key={category.id} className="treatmentCard">
                            <div className="priceTitle">
                              <span className="priceHead">{category.Name}</span>
                              <span className="stylists">
                                Junior Stylist | Senior stylist
                              </span>
                            </div>
                            <Treatments treatments={category.treatments} />
                            {category.name === "Permanent & Semi" ? (
                              <div className="treatmentInfo">
                                <br />
                                <br />- Colour correction & Fashion colours on
                                consultation.
                              </div>
                            ) : (
                              ""
                            )}
                            {category.name === "Treatments" ? (
                              <div className="treatmentInfo">
                                <br />* - Added to a full price service
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }}
            </Query>
          </div>
        </div>
        <div className="divider"></div>
        <div id="serviceBooking" data-aos="zoom-out-up">
          <div id="bookingHeader">
            <h3>Booking appointments</h3>
          </div>
          <div id="bookingtext">
            <p id="covidAlert">
              As a result of current Covid-19 guidelines we are not taking
              online bookings presently. Please <a href="#!">contact us</a> or
              give us a ring to book an appointment. We aim to be restart online
              booking as soon as possible. Thank you
            </p>
            <p className="black-text">
              Not all our services are listed within online booking so if you
              cannot see what you need please give us a call on 01993 201195. We
              also run a cancellation list within the salon at busy times.
              <br />
              Please note – Once we receive your online booking we will approve
              it in salon, this means it can only be confirmed during our
              ‘opening hours’ but dont worry it will hold the appointment for
              you! If you dont receive a confirmation email please get in touch.
              <br />
              <br />* All Tints for beauty and hair require a Patch Test 48
              hours prior to treatment therefore if you have not visited the
              salon previously please call us to arrange this before your
              treatment.
              <br />
              <br />
              Should you wish to cancel an appointment, less than 24 hours prior
              notice before the scheduled time will result in a 50% fee. No
              notice given leaves you liable for the full charge.
              <br />
              We understand sometimes situations cannot be foreseen. In both
              cases, extenuating circumstances will be considered, but the final
              decision will be at the sole discretion of Flawless Finish.
            </p>
          </div>
          <div id="bookingCTA" className="center">
            <a href="#!" className="waves-effect waves-light btn-large">
              Book Flawless
            </a>
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

export default Services;
