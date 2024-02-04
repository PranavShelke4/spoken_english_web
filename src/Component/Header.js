import React from "react";
import "../Style/header.css";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <div className="header">
      <Container>
        <div className="header-boxs">
          <div className="left-box">
            <h1>Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
            <div className="button-box">
              <button>Try it free 7 days</button>
            </div>
          </div>
          <div className="right-box">dassd</div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
