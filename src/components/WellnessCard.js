import React, { Component } from "react";

class WellnessCard extends Component {
  render() {
    return (
      <div className="wellnessCard" data-aos="fade-right">
        <div className="row">
          <div className="col l4 m12 s12">
            <img
              src={this.props.img}
              alt="logo"
              width="100%"
              height="auto"
              className="wellnessCardImg"
            />
          </div>
          <div className="col l8 m12 s12" className="wellnessCardText">
            <h3 className="wellnessCardTitle">{this.props.title}</h3>
            <p className="wellnessCardContent">
              {this.props.content}
              {this.props.links ? this.props.links : <p></p>}
            </p>
            <a
              className="waves-effect waves-light btn-large wellnessCardBtn"
              href={this.props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default WellnessCard;
