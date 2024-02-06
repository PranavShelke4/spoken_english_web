import React from "react";
import Container from "react-bootstrap/Container";
import "../Style/About.css";
import img2 from "../assets/img2.png";

function AboutUs() {
  return (
    <div className="about-us">
      <Container>
        <h1>
          Know More <span>About Us</span>
        </h1>
        <div className="about-us-boxs">
          <div className="about-us-box-1">
            <img src={img2} alt="about-us-img" />
          </div>
          <div className="about-us-box-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              mollis neque non hendrerit pellentesque. Sed maximus, orci id
              pharetra rhoncus, enim tortor dictum leo, vel lacinia arcu purus
              sit amet nisi. In imperdiet, lorem non vulputate faucibus, lectus
              felis congue urna, vitae vulputate mi justo convallis nisi. Sed
              consequat tempus fringilla. Nam vehicula metus non hendrerit
              ornare. Etiam aliquet vel nisl at venenatis. Aenean condimentum
              volutpat lobortis. In sit
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
