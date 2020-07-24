import React, { Component } from "react";

import wellnessTravel from "../images/wellnessTravel.png";

class WellnessCardMirror extends Component {
  render() {
    return (
      <div className="wellnessCard">
        <div className="row">
          <div className="col l8 m12 s12">
            <h3 className="wellnessCardTitle">Travel Counsellor</h3>
            <p className="wellnessCardContent">
              Hi, I am Natalie and I run a bespoke travel business here at
              Polished in Bampton. My services include a whole variety of travel
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
              look forward to your trip.
            </p>
            <button className="waves-effect waves-light btn-large wellnessCardBtn">
              Find out More
            </button>
          </div>
          <div className="col l4 m12 s12">
            <img src={wellnessTravel} alt="logo" width="100%" height="auto" />
          </div>
        </div>
      </div>
    );
  }
}

export default WellnessCardMirror;
