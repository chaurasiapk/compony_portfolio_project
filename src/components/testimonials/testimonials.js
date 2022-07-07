import React from "react";

import image6 from "../../assets/images/image6.png";
import quote from "../../assets/images/quote.png"
import ceo from "../../assets/images/ceo.png"
import "./testimonials.css";

export const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials">
        
        <div className="testimonials-text">

            <div>
            <img className="quote-up" src={quote} alt=""/>
            <h3>They worked so hard to fulfill our goal
             <img className="qoute-down" src={quote} alt=""/>
          </h3>
            </div>
          <div className="ceo">
            <div className="ceo-image">
              <img  src={ceo} alt=""/>
            </div>
            <div className="ceo-details">
              <h5>Wade Warren</h5>
              <p>CEO, Unicraft</p>

            </div>
           
          </div>

        </div>

        <div className="testimonials-image">
          <img src={image6} atl="testimonials-image" />
        </div>
      </div>
    </div>
  );
};
