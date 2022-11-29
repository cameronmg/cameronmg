import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              
                <h2>Education</h2>
                <h3>Liberty University</h3>
                <h6>Lynchburg, VA</h6>
                <p>● Currently transferring</p>
                <h3>Lone Star College System</h3>
                <h6>Cypress, TX</h6>
                <p>● GPA: 3.95</p>
              
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
