import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";

import WellnessCard from "./WellnessCard";

import icon from "../images/icon.svg";

import wellnessTravel from "../images/wellnessTravel.png";
import acupuncture from "../images/Acupuncture.jpeg";
import sars from "../images/sars.jpg";
import guyLennon from "../images/guyLennonResize.jpg"
import skinA from "../images/skinA.jpg";

class WellnessRooms extends Component {
  componentDidMount() {
    M.Sidenav.init(this.Sidenav);
    M.Sidenav.getInstance(this.Sidenav);
  }

  render() {
    return (
      <div id="wellnessPage">
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
                  <NavLink
                    to="/wellness-rooms"
                    className="navbarLink wellnessLink"
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
        <div id="wellnessHero" className="center"></div>
        <div id="wellnessHeader" className="container center">
          <h1>Wellness Rooms</h1>
          <div id="headerUnderlineGreen"></div>
          <p>
            Flawless Finish Wellness Rooms are located above the Hair Salon in
            the sanctuary of the ‘Stores’ old walls. It’s a little haven where
            independent complimentary therapists can work alongside each other
            giving you all kinds of alternative treatments and services.
          </p>
        </div>
        <div id="wellnessContent">
          {/* <WellnessCard
            img={wellnessTravel}
            title={"Travel Counsellor"}
            content={`Hi, I am Natalie and I run a bespoke travel business here at
              Flawless Finish in Bampton. My services include a whole variety of travel
              needs. Anything from UK holidays to around the word trips. Skiing,
              cruising, package holidays, tailor made itineraries or just
              parking at the airport, I can cover it all. I have over 20 years’
              experience in the travel industry and can offer a wealth of advice
              for your trip. In addition everything I offer is ATOL protected
              and financially sound so you can be sure every penny you spend is
              financially protected too. If you are celebrating a special
              birthday or looking for your honeymoon I can put together
              something really special to make your trip as memorable as
              possible. I also offer a honeymoon gift registry for couples
              looking for a unique gift list. If you are looking for someone to
              manage travel for your business, I can offer a corporate travel
              solution for you too. There is no booking fee to use my services,
              you would use me in the same way you would use any other travel
              agent however I pride myself on offering the personal touch and
              being there for all of my customers when things can get
              complicated. In these uncertain times it pays to have someone
              taking care of all of your travel needs so all you have to do is
              look forward to your trip.`}
            link={"https://www.travelcounsellors.co.uk/natalie.alcraft"}
          />*/}
          <WellnessCard
            img={acupuncture}
            title={
              "Acupuncture - Sharon Martin : BSci (Hons) Ac, Lic Ac, MBAcC"
            }
            content={`Acupuncture is considered to be beneficial for a wide range of conditions. Whatever your particular health problem, treatment is designed to affect your whole body and not just your symptoms. Many people have acupuncture to relieve specific aches and pains, such as osteoarthritis, headaches, low back pain, including anxiety and stress. Some people choose to have regular treatment because they find it beneficial and relaxing. When considering how many treatments someone may need, the sessions usually begin weekly for four to five visits, reducing in frequency as your body responds.

On the first visit your practitioner will take a medical history to ensure your treatment plan is based uniquely for your state of health and lifestyle. Sharon’s passion for this holistic practice of acupuncture is enhanced by the opportunity for her to empower her patients to understand the causes of their illness.

If you are wondering if acupuncture is suitable for your needs, Sharon offers the opportunity for a free consultation without obligation to discuss your health issue.

07903 749 754 – `}
            links={
              <p id="holisticSocials">
                <a href="mailto:holistichealthtraditions@gmail.com">Email</a> –{" "}
                <a
                  href="https://www.facebook.com/traditionalholistichealth/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>{" "}
                –{" "}
                <a
                  href="https://www.instagram.com/sharon_does_acupuncture/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>
            }
            link={"https://www.holistichealthtraditions.co.uk/"}
          />
          <WellnessCard
            img={sars}
            title={"SAR Life coaching"}
            content={`As a life coach, I assist people to find the tools to enable them to live their lives to their full potential and to be their ‘best self’. You have the tools and the answers already in you and as a coach I will ask the right questions to enable you to think differently or to see a situation from a different point of view. Unlike counselling or therapy, coaching does not tend to be post crisis and does not focus on the past but looks at ways to move forward.

Coaching can benefit you if you feel overwhelmed by an ongoing situation or need motivation to ultimately succeed.

I use the GROW model of coaching, The GROW model focuses on goal setting, looking at the reality of the situation, then your options and then the way forward.

1 Hour Session – £60

Payment is made before each session. Any queries then please call me 07906 320595 or email me at info@sarlifecoaching.co.uk.

`}
            link={"http://www.sarlifecoaching.co.uk/"}
          />
          <WellnessCard
            img={guyLennon}
            title={"Guy Lennon counselling"}
            content={'Your life does not get better by chance, it gets better by change.\n\nLife is not often easy; if you are facing challenging periods and struggling to get through or carry on then you are certainly not alone. People come to therapy for many reasons, you might feel like you are living in the shadow of past events or you struggle with relationships, addiction or are feeling stuck and not knowing why. There is no such thing as a problem which is too big or too small or too strange. Everyone needs a helping hand once in a while.\n\nWe would love to introduce you to Guy Lennon, our amazing counsellor. Guy is a private counsellor with 10 years of experience, in which he\'s helped many individuals overcome their obstacles in life. He covers all areas of counselling, specialising in chemical and behavioural addiction and post-traumatic stress disorder (PTSD). Guy has a friendly face which some of you may have seen around Bampton. He is here if anyone needs anything and he always has time to listen.\n\nIf you need anything feel free to call Guy on 07980 922518 to book your consultation or head over to his website.'}
            link={"http://www.guylennoncounselling.co.uk/"}
            />
            <WellnessCard
              img={skinA} 
              title={"Skin Aesthetik Clinic"}
              content={"Aesthetic Clinic  : Anti- Wrinkle Injection , Dermal Fillers , Mesotherapy , PRP , Sunekos , Vampire Facial Lift , Skin tag removal , Chemical Peels . All treatments performed by a doctor specialising in aesthetic medicine and trained at Harley Academy in London. \n\nBooking 07871409638"}
              links={
                <p id="skinSocials">
                  Find us on Instagram:
                  <a href="https://www.instagram.com/skinaesthetik/" target="_blank" rel="noopener noreferrer"> @skinaesthetik</a>
                </p>
              }
              link={"http://skinaesthetik.com/"}
            />
          <div className="container">
            <div className="card" id="wellnessRent">
              <div className="card-content white-text">
                <span className="card-title">
                  Interested in renting a room at Flawless Finish?
                </span>
                <p>
                  If you are interested in renting a room in the wellness space
                  please get in touch with us using our contact page.
                </p>
              </div>
              <div className="card-action">
                <NavLink to="/contact" id="wellnessRentLink">
                  Contact us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <footer className="page-footer" id="wellnessFooter" data-aos="fade-up">
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

export default WellnessRooms;
