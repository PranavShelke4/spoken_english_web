import React from "react";
import "../Style/Courses.css";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

function Courses() {
  return (
    <div className="Courses">
      <Container>
        <h5 className="sub-title">__start with</h5>
        <h1 className="title">OUR COURSES</h1>

        <div className="course-boxs">
          <div className="course-box">
            <img
              src="https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp"
              alt="course1"
              className="course-img"
            />
            <div className="course-info-box">
              <h6>Technology</h6>
              <h4>Web Development</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mollis neque non hendrerit....
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Button className="course-button">Register</Button>
              </div>
            </div>
          </div>

          <div className="course-box">
            <img
              src="https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp"
              alt="course1"
              className="course-img"
            />
            <div className="course-info-box">
              <h6>Technology</h6>
              <h4>Web Development</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mollis neque non hendrerit....
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Button className="course-button">Register</Button>
              </div>
            </div>
          </div>

          <div className="course-box">
            <img
              src="https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp"
              alt="course1"
              className="course-img"
            />
            <div className="course-info-box">
              <h6>Technology</h6>
              <h4>Web Development</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mollis neque non hendrerit....
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Button className="course-button">Register</Button>
              </div>
            </div>
          </div>
        </div>
        
      </Container>
    </div>
  );
}

export default Courses;
