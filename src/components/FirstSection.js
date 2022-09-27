import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './FirstSection.css';
import Navbar from 'react-bootstrap/Navbar';

function FirstSection() {
  return (
    <div className='FirstSection'>
      {/*  */}
       <Navbar  expand="lg">
       <Navbar.Brand href="/" className='logo'>LOGO</Navbar.Brand>
      </Navbar>
      <Container className='con'>
        <Row className='roww1'>
          <Col className='hover-underline-animation'>Flights</Col>
          <Col className='hover-underline-animation'>Hotels</Col>
          <Col className='hover-underline-animation'>Trains</Col>
          <Col className='hover-underline-animation'>Buses</Col>
        </Row>
        <Row className='roww'>
          
        </Row>
      </Container>
      
        
      
    </div>
  )
}

export default FirstSection