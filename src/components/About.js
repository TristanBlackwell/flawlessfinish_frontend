import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import comingSoon from "../images/comingSoon.png";

const slides = [
  { url: "https://lorempixel.com/250/250/nature/1", alt: "Lorem ipsum" },
  { url: "https://lorempixel.com/250/250/nature/2", alt: "Lorem ipsum" },
  { url: "https://lorempixel.com/250/250/nature/3", alt: "Lorem ipsum" },
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
                to="/wellness-Rooms"
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
        <div id="aboutHero" className="center">
          <h1>About Us</h1>
        </div>
        <div id="aboutFlawless" className="center">
          <div>Logo</div>
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
        <div>
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
          <div id="teamCards">
            <div className="memberCard">
              <div className="memberImg">
                <img
                  src={comingSoon}
                  alt="portrait"
                  height="500px"
                  width="100%"
                ></img>
              </div>
              <p className="memberRole center">Owner & Senior stylist</p>
              <h5 className="memberName center">Katie</h5>
              <div className="memberDescription ">
                After training to be a hairdresser at Mahogany, Katie went on to
                work on a cruise liner sailing around the Caribbean, after
                leaving cruises she went on to backpack around the world and
                ended up working in Melbourne at a blow dry bar before returning
                to the UK and landing a job in her hometown at Polished in
                Bampton.
                <br /> I love to learn new things and am always trying to
                challenge myself with something new, we are always doing
                training in new techniques in salon and on courses.
                <br /> On cruises I did lots of event hair for evening wear and
                on-board weddings, this is an area of hairdressing I want to
                focus on again this year as I love creating fabulous up-do’s!{" "}
                <br />
                “I love my clients to leave feeling confident and fabulous with
                a bounce in their step, it’s about making you feel like the best
                version of yourself!”
              </div>
            </div>
            <div className="memberCard">
              <div className="memberImg">
                <img
                  src={comingSoon}
                  alt="portrait"
                  height="500px"
                  width="100%"
                ></img>
              </div>
              <p className="memberRole center">Senior stylist</p>
              <h5 className="memberName center">Kerry</h5>
              <div className="memberDescription ">
                Started her career in Minster Lovell before moving on to work
                for Toni & Guy, most recently working in Morton on the Marsh
                before returning to Bampton where she was brought up as a child.
                <br />
                Kerry has real passion and enthusiasm for her career, having
                built her knowledge within the industry. Kerry has experience in
                all aspects of hairdressing, she loves to balayage and finishing
                off with a precision cut.
                <br /> With a caring approach to her clients she maintains a
                busy column, she loves to keep up to date and is regularly on
                courses sharpening her skills. <br />
                “I love that my job allows me to be creative every day, my job
                satisfaction comes from making my clients feel good about
                themselves, after all your hair is 90% of your selfie!”
              </div>
            </div>
            <div className="memberCard">
              <div className="memberImg">
                <img
                  src={comingSoon}
                  alt="portrait"
                  height="500px"
                  width="100%"
                ></img>
              </div>
              <p className="memberRole center">Stylist</p>
              <h5 className="memberName center">Wiki</h5>
              <div className="memberDescription">
                I have always enjoyed hairdressing, so decided to pursue a
                career within the industry. It was unquestionably the right
                choice.
                <br />
                I would say I am a perfectionist and I like everything I do to
                be flawless. I can’t wait to start my level 3 in hairdressing so
                I can start adding more creative elements to my work. <br />
                “I love that I can make others feel beautiful, I have always
                struggled with confidence so being able to give my clients that
                boost is the most rewarding feeling.”
              </div>
            </div>
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
