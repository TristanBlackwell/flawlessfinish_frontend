import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const slides = [
  {
    reviewTag: "For You",
    reviewText:
      "A lovely, friendly salon where the hairdressers listen to what you want so you leave with a big smile everytime",
    author: "- Christine",
  },
  {
    reviewTag: "Natural Charm",
    reviewText:
      "The ease and comfort of this most salon is the perfect part of a busy life. The charm and skill of the staff helps you feel really confident in them",
    author: "- Jennie",
  },
  {
    reviewTag: "Warm & Friendly",
    reviewText:
      "Polished is a gem – the salon is a relaxing and welcoming place where you receive a personal and friendly service",
    author: "- Anne",
  },
];

class Landing extends Component {
  componentDidMount() {
    M.Sidenav.init(this.Sidenav);

    M.Sidenav.getInstance(this.Sidenav);
  }
  render() {
    return (
      <div id="Landing">
        <div id="landingHero">
          <nav className="transparent no-shadows">
            <div className="nav-wrapper">
              <a
                href="#!"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i className="fas fa-bars"></i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <NavLink
                    to="/"
                    exact
                    style={{ borderBottom: "2px solid #efc3e6" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="landingNavbarLink">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" className="landingNavbarLink">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/wellness-rooms" className="landingNavbarLink">
                    Wellness rooms
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="landingNavbarLink">
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
              <NavLink
                to="/"
                exact
                className=" landingNavbarLink sidenav-close"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="landingNavbarLink sidenav-close">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="landingNavbarLink sidenav-close"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wellness-rooms"
                className="landingNavbarLink sidenav-close"
              >
                Wellness Rooms
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="landingNavbarLink sidenav-close"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-facebook socialMobileLink "></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-instagram socialMobileLink"></i>
              </a>
            </li>
          </ul>
          <div id="landingHeroContent">
            <h1>Your Beauty, Pronouced</h1>
            <p>salon // Bampton</p>
            <a href="#!" className="waves-effect waves-light btn-large">
              Book Flawless
            </a>
          </div>
        </div>

        <div id="reviewSummary">
          <Slider autoplay={4000}>
            {slides.map((slide, index) => (
              <div key={index} className="center">
                <div className="reviewTag">" {slide.reviewTag} "</div>
                <h2>{slide.reviewText}</h2>
                <p>{slide.author}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div id="servicesSummary">
          <div id="serviceText">
            <h3>A new standard</h3>
            <p>Taking style to a new level only you can dream of</p>
            <a href="#!">See more</a>
          </div>
        </div>
        <div id="ourSalon" className="transparent">
          <div className="row">
            <div className="col s12 m12 l5 offset-l1 valign-wrapper">
              <img
                src="https://www.polishedsalon.co.uk/wp-content/uploads/2019/06/Bamton-House-1-700x467.jpg"
                alt="Candle and towel"
                id="salonPicture"
              />
            </div>
            <div className="col s12 m12 l5 offset-l1 center" id="ourSalonInfo">
              <h3 id="ourSalonTitle">What to expect</h3>
              <p id="ourSalonText" className="center">
                Flawless Finish Hair is a modern country salon providing bespoke
                hair care and colour through one-on-one, customised experiences.
                At Flawless, we believe beauty should never be compromised and
                tailoring your hair to suit your lifestyle and needs is our
                goal. We aim to enhance your physical appearance and relaxation,
                we do so with your overall well-being in mind whether you have
                30 minutes spare from your day or a couple of hours.
              </p>
              <span>
                <button className="btn-flat" id="ourSalonLink">
                  | Meet the team |
                </button>
              </span>
            </div>
          </div>
        </div>
        <footer className="page-footer" data-aos="fade-up">
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

export default Landing;
