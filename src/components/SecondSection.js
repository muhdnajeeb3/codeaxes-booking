import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./SecondSection.css";

// import offers from '../offers.json'

function SecondSection() {

  return (
    <div className="SecondSection">        
      <Container>
        <Row className="secondrow">
          <h1 className="wheretogo">WHERE2GO</h1>
        </Row>
      </Container>
      <Row className="productoffering">
        <span className="productoffering1">PRODUCT OFFERING</span>
        <Row className="productparag">
          <p className="productparag1">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown
          </p>
        </Row>
      </Row>
    </div>
  );
}

export default SecondSection;
