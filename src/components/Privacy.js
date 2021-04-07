import React, { useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "react-animated-slider/build/horizontal.css";

import icon from "../images/icon.svg";

let sidenav;


const Privacy = () => {
    useEffect(() => {
        M.Sidenav.init(sidenav);
    
        M.Sidenav.getInstance(sidenav);
    
        // if (window.loc !== window.location.pathname) {
        //     window.gtag("config", process.env.REACT_APP_TRACKING_ID, {
        //       page_title: "privacyPolicy"
        //   })
        //   }
         }) 
    
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
                  sidenav = Sidenav;
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
              <h1>Privacy Policy</h1>
            </div>
            <div id="privacyPolicy" className="container">
                <p>We are committed to protecting your personal data.  This privacy notice is to give you an overview of how your personal data is processed when using our website. </p>
                <h4>Cookies</h4>
                <p>A cookie is a small text file that is downloaded onto the computers and smartphones used by our website visitors. It can recognise your device and store information about your preferences or past actions while on our website.<br/>
                    We use cookies on our website to help you get the best experience from our website. They help us see what pages you like and the kinds of information you are looking for.<br/>
                    Our website has been set up to ask your permission to store cookies on the device you use to access our website. The Help menu within your browser should tell you how to manage cookies.  Useful information about cookies and how to control them can be found at <a href="www.aboutcookies.org">www.aboutcookies.org</a><br/>
                    Our website also uses cookies that do not require your consent. For example, cookies that are needed to transmit information or provide online services. This includes online forms and shopping baskets.
                </p>
                <h4>Your data</h4>
                <p>Sending information via the internet is not completely secure.  Although we will do our best to protect your information, we cannot guarantee the security of data transmitted to our site.  Our database is encrypted and we use security features to protect data from hackers and cyber attacks.<br />
                    We will regularly review the personal data our website has stored (for example, names, addresses, contact details and payment details) and securely delete information we no longer need.
                </p>
                <h4>Other third-party services</h4>
                <p>We use Google Analytics to collect visitor numbers and information about how people use our site.<br />
                You can opt out of being tracked by Google Analytics. Find out more: <a href="http://tools.google.com/dlpage/gaoptout">http://tools.google.com/dlpage/gaoptout</a>.<br/>
                Third-party services used on our website, such as Google Maps and YouTube, may collect data from our website visitors such as IP addresses (these are numbers associated with individual computers and smartphones).<br/>
                </p>
                <h4>External links on our website</h4>
                <p>This privacy notice does not apply to any external websites we link to from our website.</p>
                <h4>Your rights</h4>
                <p>You have the right to:</p>
                <ul>
                    <li>request access to your personal data.</li>
                    <li>request correction of your personal data.</li>
                    <li>request that your personal data is deleted.</li>
                    <li>object to the processing of your personal data.</li>
                    <li>request restriction of processing your personal data</li>
                    <li>request transfer of your personal data</li>
                    <li>and withdraw consent to the processing of your personal data</li>
                </ul>
                <p>Please email us at <a href="mailto: info@flawlessfinishhair.co.uk">info@flawlessfinishhair.co.uk</a> to make these requests.</p>
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
                    <div className="container black-text left">© 2020 Flawless
                        <span id="privacyPolicyLink"><Link to="/privacy">Privacy Policy</Link></span>
                    </div>
                </div>
            </footer>
          </div>
        );
}

export default Privacy;