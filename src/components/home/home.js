import React from "react";
import image1 from "../../assets/images/image1.png"

import "./home.css"

export const Home = ()=>{
    return(
        <div id="home-container" className="home-container">
            <div className="home-text">
                <h1>We <span>design</span> your feelings, <span>code</span> emotions</h1>
                <p>We talented people with latest technologies can help you to fulfil your dream.</p>
                <button className="button1">All work</button>
            </div>
            <div className="home-image">
                    <img src={image1} alt=""/>
            </div>
           

        </div>
    );
}