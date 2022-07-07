import React from "react";
import "./navBar.css";

import brandLogo from "../../assets/logo/logo.png";

export const NavBar = () => {
  window.addEventListener("wheel", () => {
    if (window.pageYOffset > 80) {
      if (
        !document.getElementById("nav-container").className.includes("shadow")
      ) {
        document.getElementById("nav-container").className =
          document.getElementById("nav-container").className + " shadow";
      }
    } else if (window.pageYOffset < 80) {
      document.getElementById("nav-container").className = document
        .getElementById("nav-container")
        .className.replace("shadow", "");
    }
  });

  return (
    <div id="nav-container" className="nav-container">
      <div className="logo">
        <img src={brandLogo} atl="" />
      </div>

      <div className="nabBar">
        <div className="left-nav">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="nav-item"
          >
            Home
          </button>
          <button
            onClick={() => {
              window.scrollTo(0, 900);
            }}
            className="nav-item"
          >
            Services
          </button>
          <button
            onClick={() => {
              window.scrollTo(0, 1800);
            }}
            className="nav-item"
          >
            Team
          </button>
          <button
            onClick={() => {
              window.scrollTo(0, 2750);
            }}
            className="nav-item"
          >
            Testomonial
          </button>
        </div>

        <div className="right-nav">
          <button
            onClick={() => {
              window.scrollTo(0, 3650);
            }}
            className="nav-item"
          >
            Contact
          </button>
          {/* <button onClick={()=>{console.log(window.pageYOffset)}} className="nav-item">Contact</button> */}
        </div>
      </div>
    </div>
  );
};
