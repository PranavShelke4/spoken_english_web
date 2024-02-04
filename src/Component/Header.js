import React from "react";
import "../Style/header.css";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <div className="header">
      <Container>
        <div className="header-boxs">
          <div className="left-box">
            <h1>GROW UP <br /><span>YOUR</span> SKILL<br /> IN MINUTES</h1>
           
              <button className="header-button">Try it free 7 days</button>
            
          </div>
          <div className="right-box">dassd</div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
