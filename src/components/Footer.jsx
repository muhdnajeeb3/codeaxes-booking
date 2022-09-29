import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
    <Row >
            <Col >
            <Row >
                <h6 className='desctitle'>Why My Trip?</h6>
                <p className='descpar'>
                d typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                </p>

            </Row>
            </Col>

            <Col>
            <Row>
            <h6 className='desctitle'>Booking Flights with My Trip</h6>
                <p className='descpar'>
                d typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                </p>

            </Row>
            </Col>

            <Col>
            <Row>
            <h6 className='desctitle'>Domestic Flights</h6>
                <p className='descpar'>
                d typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                </p>
            </Row>
            </Col>

        </Row> 
      
        <Row className='footer1'>
            <Col>
            <Row>
                <span className="country">icon</span>
            </Row>
            </Col>
            <Col>
            <Row>
            <span className='footertext'>2022 PVT.LTB.</span><br />

<span className='country'>Country</span><span className='indiausauae'>INDIA,USA,UAE</span>
            </Row>
            </Col>
            
        </Row>
    </div>
  )
}

export default Footer