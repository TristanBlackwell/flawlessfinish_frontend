import React from "react";

import comingSoon from "../images/comingSoon.png";

const MemberCard = ({ member }) => {
  return (
    <div className="memberCard">
      <div className="memberImg">
        <img
          src={member.Portrait ? member.Portrait : comingSoon}
          alt="member portrait"
          height="auto"
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
