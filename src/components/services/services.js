import React from "react";
import "./services.css"
import image2 from "../../assets/images/image2.png"

export const Services = ()=>{
    return(
       <div id="services-container" className="services-container">
            <div className="serviecs">
                <div className="services-left">
                    <h1>
                    Real AR - Real estate virtual solution
                    </h1>
                    <p>
                    Augmation reality solution with latest technology enhances real estate.
                    </p>
                    <button className="button1">Learn more</button>
                </div>

                <div className="services-right">
                    <img src={image2} atl="image2"/>

                </div>

            </div>
        
       </div>
    );
}