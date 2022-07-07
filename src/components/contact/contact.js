import React from "react";

import "./contact.css";

export const Contact = ()=>{

   

    return(
      <div className="contact-container">
            <div className="contact">
                <div className="contact-upper">
                    <div className="upper-left">
                        <h3>Schedu<span>/</span>e an appointment</h3>

                    </div>

                    <div className="upper-right">
                            <p>We are always care about your project. Feel free to contact with us.
                         We make digital any project with augmented, virtual and mixed reality. We offer IoT support as well.</p>
                    </div>

                </div>
                <div className="contact-middel">

                    <div className="middel-left">
                    
                    <div className="address">
                        <h3>Address</h3>
                        <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>

                    </div>

                    <div className="phone">
                            <h3>Phone</h3>
                            <div>
                                <p>+1 629 555 0129</p>
                                <p>+1 303 555 0105</p>
                            </div>


                    </div>

                    </div>

                    <div className="middel-right"> 

                            <h3>Socia/websites</h3>
                            <div className="websites">
                                <span>Facebook</span>
                                <span>YouTube</span>
                                <span>Dribbble</span>
                                <span>Instagram</span>
                                <span>Vimeo</span>
                                <span>Behance</span>

                            </div>


                    </div>

                </div>
                <div className="contact-lower">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.52003597069!2d83.3796119512499!3d26.75968838311117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991448b28fcff5b%3A0xd3af5c574cc2d6d2!2sGorakhpur%20Junction%20railway%20station!5e0!3m2!1sen!2sin!4v1657014448440!5m2!1sen!2sin" width={1171} height={341} style={{border:1}}  loading={"lazy"}></iframe>
                </div>

            </div>
      </div>

      
    );
}