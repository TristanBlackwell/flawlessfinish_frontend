import React from "react";

import comingSoon from "../images/comingSoon.png";

const MemberCard = ({ member }) => {
  return (
    <div className="memberCard">
      <div className="memberImg">
        <img
          src={member.portrait ? member.portrait : comingSoon}
          alt="member portrait"
          height="500px"
          width="100%"
        />
      </div>
      <p className="memberRole center">{member.Role}</p>
      <h5 className="memberName center">{member.Full_Name}</h5>
      <div className="memberDescription">{member.Description}</div>
    </div>
  );
};

export default MemberCard;
