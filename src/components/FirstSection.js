import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./FirstSection.css";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Navigate, useHistory } from "react-router-dom";
import {
  faAddressCard,
  faBus,
  faHotel,
  faParachuteBox,
  faPlaneDeparture,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FirstSection() {
  const [oneWay, setOneWay] = useState(true);
  const [roundTrip, setRoundTrip] = useState("");
  const [multiCity,setMultiCity] = useState("");
  let navigate = useNavigate();
  const  FLIGHTHANDLER = () =>{
      navigate("/flights")
  }
  const HOTELHANDLER = () =>{
    navigate("/hotels")
  }
  const TRAINHANDLER = () => {
    navigate("/trains")
  }
  const MULTICITYHANDLER = () =>{
    setOneWay("")
    setRoundTrip("")
  }
  const ROUNDTRIP = () => {
    setMultiCity("")
    setOneWay("")
  }
  const ONEWAY = () =>{
    setMultiCity("")
    setRoundTrip("")
  }
  

  return (
    <div className="FirstSection">
      {/*  */}
      <Navbar expand="lg">
        <Navbar.Brand href="/" className="logo">
          LOGO
        </Navbar.Brand>
      </Navbar>
      <Container className="con">
        <Row className="roww1">
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit" onClick={FLIGHTHANDLER}><FontAwesomeIcon icon={faPlaneDeparture} size="2x" />
            <br />
            Flights
            </Button>
            
          </Col>
          <Col className="hover-underline-animation">
          
            {" "}
            <Button variant="" type="submit">
            <FontAwesomeIcon icon={faHotel} onClick={HOTELHANDLER} size="2x" /> <br /> Hotels
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit">
            <FontAwesomeIcon icon={faTrain} onClick={TRAINHANDLER} size="2x" />
            <br /> Trains
            </Button>

          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit">
            <FontAwesomeIcon icon={faBus} size="2x" />
            <br />
            Buses
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit">
            <FontAwesomeIcon icon={faAddressCard} size="2x" /> <br />
            Visa
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit">
            <FontAwesomeIcon icon={faParachuteBox} size="2x" />
            <br />
            Holiday Packages
            </Button>
          </Col>
        </Row>
        {/* one way roundtrip multicity */}
        <Row className="roww">
          <Button className="radiobutton" variant="">
            <input
              type="radio"
              value="select"
              name="select"
              onChange={ONEWAY}
              onClick={() => setOneWay(!oneWay)}
            />
            ONE WAY
          </Button>
          <Button className="radiobutton1" variant="">
            <input
              type="radio"
              value="select1"
              name="select"
              onChange={ROUNDTRIP}
              onClick={() => setRoundTrip(!roundTrip)}
            />
            ROUND TRIP
          </Button>
          <Button className="radiobutton2" variant="">
            <input type="radio" value="select2" name="select" onClick={() => setMultiCity(!multiCity) } onChange={MULTICITYHANDLER}/>
            MULTI CITY
          </Button>
          <span className="bidf">Book International and Domestic Flights</span>
          <Row>
            {/* oneway */}
            {oneWay && (
              <>
                <Row className="oneway">
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>FROM</h4>
                      <br />
                      <h2>Calicut</h2>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>TO</h4>
                      <br />
                      <h2>Dubai</h2>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>DEPARTURE</h4>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>RETURN</h4>
                    </Button>
                  </Col>
                  {/* <Col>
                    <Button variant="" className="onewaybutton">
                      <h1>TRAVELLERS AND CLASS</h1>
                    </Button>
                  </Col> */}
                </Row>
              </>
            )}
            {/* round trip */}
            {roundTrip && (
              <>
                <Row className="oneway">
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>FROM</h4>
                      <br />
                      <h2>Calicut</h2>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>TO</h4>
                      <br />
                      <h2>Dubai</h2>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>DEPARTURE</h4>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>RETURN</h4>
                    </Button>
                  </Col>
                  {/* <Col>
                    <Button variant="" className="onewaybutton">
                      <h1>TRAVELLERS AND CLASS</h1>
                    </Button>
                  </Col> */}
                </Row>
              </>
            )}
            {/* mutli city */}
            { multiCity && (
              <>
              <Row className="oneway">
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>FROM</h4>
                      <br />
                      <h2>Calicut</h2>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>TO</h4>
                      <br />
                      <h2>Dubai</h2>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>DEPARTURE</h4>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>RETURN</h4>
                    </Button>
                  </Col>
                  {/* <Col>
                    <Button variant="" className="onewaybutton">
                      <h1>TRAVELLERS AND CLASS</h1>
                    </Button>
                  </Col> */}
                </Row>
                <Row className="oneway">
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>FROM</h4>
                      <br />
                      <h2>Calicut</h2>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>TO</h4>
                      <br />
                      <h2>Dubai</h2>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h4>DEPARTURE</h4>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <Button className="anothercity"> +Add ANOTHER CITY</Button>
                    </Button>
                  </Col>
                  {/* <Col>
                    <Button variant="" className="onewaybutton">
                      <h1>TRAVELLERS AND CLASS</h1>
                    </Button>
                  </Col> */}
                </Row>
                
              </>
            )}
            <Row className="row3">
              <span className="faretypes">Select A <br/>Fare Type:</span>
              <Button className="faretypesbutton" variant=""><input type="radio" name="fare"/><span className="farespan">Regular<br/>Fares</span> </Button>
              <Button className="faretypesbutton1" variant=""> <input type="radio" name="fare"/><span className="farespan">Armed Forces<br />Fares</span> </Button>
              <Button className="faretypesbutton2" variant=""><input type="radio" name="fare"/><span className="farespan">Student <br />Fares</span> </Button>
              <Button className="faretypesbutton3" variant=""><input type="radio" name="fare"/><span className="farespan">Senior Citizen <br />Fares</span> </Button>
              <Button className="faretypesbutton4" variant=""><input type="radio" name="fare"/><span className="farespan">Doctor & Nurses <br />Fares</span> </Button>
              {/* <Button className="faretypesbutton5" variant=""><input type="radio" name="fare"/>1</Button> */}
            </Row>

          </Row>
          {/* <br /> */}
          {/* one way */}
        </Row>
      </Container>
    </div>
  );
}

export default FirstSection;
