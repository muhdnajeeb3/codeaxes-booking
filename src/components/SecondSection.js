import React, { useState } from "react";
import { Button, Container, Form, Col,Row } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "./SecondSection.css";


function SecondSection() {
  const [singleSelections, setSingleSelections] = useState([]);
  const [multiSelections, setMultiSelections] = useState([]);
  var Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
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
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
          </p>
        </Row>
      </Row>
      
      
      
    </div>
  );
}

export default SecondSection;
