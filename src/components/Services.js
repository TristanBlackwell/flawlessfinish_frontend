import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import icon from "../images/icon.svg";

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
        <div id="covidNotice" data-aos="zoom-out-up">
          <div id="covidHeader">
            <h3>Covid-19 Guidelines</h3>
          </div>
          <div id="covidText">
            <p id="covidAlert">
              We are so happy to be back in the salon and we are of course are
              adhering to all government guidelines in order to carry out all
              services and treatments in the safest way possible. Please take
              the time to read the following points carefully to help us provide
              as smooth a service as possible:
            </p>
            <ul>
              <li>
                To reduce numbers in the building we are running on a reduce
                waiting area so as to adhere to social distancing, please wait
                outside the salon to be welcomed in when there is space.
              </li>
              <li>
                We regret that due to restrictions and compulsory cleaning times
                we are unable to accept late arrivals, please let us know as
                soon as possible if you are running late and we will be able to
                advise you on what is best to do. A 72-hour cancellation policy
                is in place; if you fail to turn up or cancel last minute
                whether that be the whole service or a single treatment within
                it.
              </li>
              <li>
                We are trying to avoid too many people in the building at one
                time, if you are booking an appointment for a child or someone
                who cannot attend their appointment alone please make staff
                aware before booking so we can decide whether we can accommodate
                this on the appointment time.
              </li>
              <li>
                Please do not attend your appointment if you feel at all unwell,
                Even if you are sure you do not have COVID-19. But especially if
                you have any of the following sympotoms a persistant cough, high
                temperature or a loss in your sense of taste or smell. We are a
                small team and having anyone off sick would be devastating for
                all involved so please give us as much notice as you can, and
                you will not be charged a cancellation fee.
              </li>
              <li>
                When you enter the building please make sure you use the
                sanitising gel. It is now mandatory for all customers to wear a
                facemask inside the salon, unless they are exempt for medical
                reasons. It has been advised that staff are to wear visors with
                a mask when in close contact with customers, we are smiling
                underneath!
              </li>
              <li>
                If you wish to tip your stylist you are welcome to in cash (it
                unfortunately cannot be added on to card). There are clear pots
                by the reception desk that you can place any change in so money
                does not need to be touched.
              </li>
              <li>
                If you wish to buy a retail product, we would prefer you to
                call/email us and we can give you a collection time. If this is
                not possible, please be prepared that there may be a wait for
                someone to assist you and you may be required to wait outside
                during busy times.
              </li>
              <li>
                We are unable to provide handing space for any coats/jackets so
                please bear this in mind and be prepared to pop them in your bag
                or next to you.
              </li>
            </ul>
            <p>
              Thank you so much for taking the time to read these new
              guidelines, we are very grateful. The team look forward to
              welcoming you.
            </p>
            <p>The Flawless Finsh team x</p>
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
