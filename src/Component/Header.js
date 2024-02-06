import React from "react";
import "../Style/Header.css";
import Container from "react-bootstrap/Container";
import img1 from "../assets/img1.png";

function Header() {
  return (
    <div className="header">
      <Container>
        <div className="header-boxs">
          <div className="left-box">
            <h1>
              GROW UP <br />
              <span>YOUR</span> SKILL
              <br /> IN MINUTES
            </h1>

            <button className="header-button">Get Started</button>
          </div>
          <div className="right-box">
            <div className="grid-box">
              <img src={img1} alt="header-img" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
