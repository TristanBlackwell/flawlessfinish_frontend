import React from "react";

const Treatments = ({ treatments }) => {
  return (
    <div className="pricingSection">
      {treatments.map((treatment, i) => {
        return (
          <div className="priceItem" key={treatment.id}>
            <div className="treatmentName">{treatment.Name}</div>
            {console.log(treatment)}
            {treatment.Senior_stylist_price ? (
              <div className="treatmentPrice">
                {treatment.Stylist_price} | {treatment.Senior_stylist_price}
              </div>
            ) : (
              <div className="treatmentPrice">{treatment.Stylist_price}</div>
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
