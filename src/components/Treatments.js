import React from "react";

const Treatments = ({ treatments }) => {
  return (
    <div className="pricingSection">
      {treatments.map((treatment, i) => {
        return (
          <div className="priceItem" key={treatment.id}>
            <div className="treatmentName">{treatment.name}</div>

            {treatment.senior_stylist_price ? (
              <div className="treatmentPrice">
                {treatment.stylist_price} | {treatment.senior_stylist_price}
              </div>
            ) : (
              <div className="treatmentPrice">{treatment.stylist_price}</div>
            )}
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Treatments;
