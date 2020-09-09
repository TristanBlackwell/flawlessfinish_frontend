import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import icon from "../images/icon.svg";
import logo from "../images/logo_onwhite.jpg";
import hairPic1 from "../images/goodhair1.jpg";
import hairPic2 from "../images/goodhair2.jpg";
import hairPic3 from "../images/goodhair3.jpg";
import hairPic4 from "../images/goodhair4.jpg";
import hairPic5 from "../images/goodhair5.jpg";
import hairPic6 from "../images/goodhair6.jpg";

import Query from "./Query";
import MEMBERS_QUERY from "../queries/member/member";
import MemberCard from "./MemberCard";

const slides = [
  { url: hairPic1, alt: "Clients hair" },
  { url: hairPic2, alt: "Clients hair" },
  { url: hairPic3, alt: "Clients hair" },
  { url: hairPic4, alt: "Clients hair" },
  { url: hairPic5, alt: "Clients hair" },
  { url: hairPic6, alt: "Clients hair" },
];

class About extends Component {
  componentDidMount() {
    M.Sidenav.init(this.Sidenav);

    M.Sidenav.getInstance(this.Sidenav);
    M.Carousel.init(this.carousel);
  }

  render() {
    return (
      <div id="aboutPage">
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
                  <NavLink to="/about" className="navbarLink aboutLink">
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
                  <NavLink to="/vouchers" className="navbarLink sidenav-close">
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
                to="/wellness-Rooms"
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
        <div id="aboutHero" className="center">
          <h1>About Us</h1>
        </div>
        <div id="aboutFlawless" className="center">
          <img src={logo} alt="logo" width="100%" height="auto" />
          <h3>About Flawless Finish</h3>
          <div id="headerUnderline"></div>
          <div className="container center">
            Flawless Finish Hair is a boutique salon based in the heart of
            Bampton, Oxfordshire. Situated within a Grade II listed building,
            its walls of cotswold stone have served the village as a local store
            for over 200 years.
            <br />
            <br /> Our purpose is to provide our guests with a relaxing salon
            environment whilst providing services of the highest standard within
            the hair salon and wellness rooms above helping you feel better on
            both the inside and out.
            <br />
            <br /> Previously part of Polished Salon also in the centre of
            Bampton, we have re-opened as Flawless Finish under the guidance of
            Katie who was previously Polished Hair Salon's Manager.
            <br />{" "}
            <a
              href="https://www.polishedsalon.co.uk/"
              id="polishedLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Keeping strong ties with Polished we still highly recommend them
              for your beauty needs.
            </a>{" "}
            <br />
            <br /> We understand that great hair is vital to feel 'more you' and
            the best place to explore new exciting styles is through an
            experienced stylist you can be comfortable around and share
            experiences with.
            <br />
            <br /> All of our team have a burning passion for the hair industry,
            regularaly attending up to date training in salon and by attending
            courses on the most up to date techniques and fashions to give their
            guests the very best service they can.
            <br /> <br />
            Taking joy from the smiles and confidence customers leave the salon
            with provide our team with the fire to keep providing the best
            service possible to every client coming through the door.
            <br /> <br />
            At Flawless we stand behind our salon and service aiming to
            continually bring the best we can every day, we are always looking
            for ways to improve your experience. Come visit us and find out what
            we have to offer.
          </div>
        </div>
        <div id="clientHairSlider">
          <Slider autoplay={4000}>
            {slides.map((slide, index) => (
              <div key={index} id="flawlessGallery" className="center">
                <img src={slide.url} alt={slide.alt}></img>
              </div>
            ))}
          </Slider>
        </div>
        <div id="flawlessTeam">
          <h6 className="center">The Flawless Team</h6>
          <h3 className="center">Meet our lovely Ladies</h3>
          <div id="meetTheTeam">
            <Query query={MEMBERS_QUERY} id={null}>
              {({ data: { members } }) => {
                return (
                  <div id="teamCards">
                    {members.map((member, i) => {
                      return <MemberCard member={member} key={i} />;
                    })}
                  </div>
                );
              }}
            </Query>
          </div>
        </div>
        <footer className="page-footer" id="aboutFooter" data-aos="fade-up">
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

export default About;
