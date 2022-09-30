import React, { useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import "./FirstSection.css";
import Navbar from "react-bootstrap/Navbar";
import Records from '../records.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBus,
  faHotel,
  faParachuteBox,
  faPlaneDeparture,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function FirstSection() {
  const [oneWay, setOneWay] = useState(true);
  const [roundTrip, setRoundTrip] = useState("");
  const [multiCity, setMultiCity] = useState("");
  const [newCity, setNewCity] = useState([]);
  const [from, setFrom] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();
  const FLIGHTHANDLER = () => {
    navigate("/flights");
  };
  const HOTELHANDLER = () => {
    navigate("/hotels");
  };
  const TRAINHANDLER = () => {
    navigate("/trains");
  };
  const BUSESHANDLER = () => {
    navigate("/buses");
  };
  const VISASHANDLER = () => {
    navigate("/visas");
  };
  const HOLIDAYPACKAGES = () => {
    navigate("/holidaypackages");
  };
  const MULTICITYHANDLER = () => {
    setOneWay("");
    setRoundTrip("");
  };
  const ROUNDTRIP = () => {
    setMultiCity("");
    setOneWay("");
  };

  const ONEWAY = (e) => {
    setMultiCity("");
    setRoundTrip("");
  };
  const HANDLEADD = () => {
    const newcity = [...newCity, []];
    setNewCity(newcity);
  };
  const DELETEHANDLER = (i) => {
    const deletenewcity = [...newCity];
    deletenewcity.splice(i, 1);
    setNewCity(deletenewcity);
  };
  const FROMHANDLER = () => {
    // setFrom([])
  };

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
            <Button variant="" type="submit" onClick={FLIGHTHANDLER}>
              <FontAwesomeIcon icon={faPlaneDeparture} size="2x" />
              <br />
              Flights
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit">
              <FontAwesomeIcon
                icon={faHotel}
                onClick={HOTELHANDLER}
                size="2x"
              />{" "}
              <br /> Hotels
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit">
              <FontAwesomeIcon
                icon={faTrain}
                onClick={TRAINHANDLER}
                size="2x"
              />
              <br /> Trains
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit" onClick={BUSESHANDLER}>
              <FontAwesomeIcon icon={faBus} size="2x" />
              <br />
              Buses
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit" onClick={VISASHANDLER}>
              <FontAwesomeIcon icon={faAddressCard} size="2x" /> <br />
              Visa
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit" onClick={HOLIDAYPACKAGES}>
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
            <span className="onewaytitle">ONE WAY</span>
          </Button>
          <Button className="radiobutton1" variant="">
            <input
              type="radio"
              value="select1"
              name="select"
              onChange={ROUNDTRIP}
              onClick={() => setRoundTrip(!roundTrip)}
            />
            <span className="onewaytitle">ROUND TRIP</span>
          </Button>
          <Button className="radiobutton2" variant="">
            <input
              type="radio"
              value="select2"
              name="select"
              onClick={() => setMultiCity(!multiCity)}
              onChange={MULTICITYHANDLER}
            />
            <span className="onewaytitle">MULTI CITY</span>
          </Button>
          <Row className="bidf"> 
          <h5 className="bidf">Book International and Domestic Flights</h5>
          </Row>
          
          <Row>
            {/* oneway */}
            {oneWay && (
              <>
                <Row className="oneway">
                  <Col className="coloneway1"
                      onClick={() => alert("hey")} >
                    
                      
                      <h6>FROM</h6>
                      <h2>Kolkata</h2>
                      <p>hhh</p>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1"
                      onClick={() => alert("hey")} >
                    
                      
                      <h6>TO</h6>
                      <h2>DUBAI</h2>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1"
                      onClick={() => alert("hey")} >
                    
                      
                      <h6>DEPARTURE</h6>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1"
                      onClick={() => alert("hey")} >
                    
                      
                      <h6>RETURN</h6>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1"
                      onClick={() => alert("hey")} >
                    
                      
                      <p>TRAVELLERS AND CLASS</p>
                  </Col>
                </Row>
              </>
            )}
            {/* round trip */}
            {roundTrip && (
              <>
                <Row className="oneway">
                  <Col className="coloneway1"
                      onClick={() => alert("hey")} >
                    
                      
                      <h6>FROM</h6>
                      <h2>Kolkata</h2>
                      <p>hhh</p>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1"
                      onClick={() => alert("hey")} >
                    
                      
                      <h6>TO</h6>
                      <h2>DUBAI</h2>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1"
                      onClick={() => alert("hey")} >
                    
                      
                      <h6>DEPARTURE</h6>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1"
                      onClick={() => alert("hey")} >
                    
                      
                      <h6>RETURN</h6>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1"
                      onClick={() => alert("hey")} >
                    
                      
                      <p>TRAVELLERS AND CLASS</p>
                  </Col>
                </Row>
              </>
            )}
            {/* mutli city */}
            {multiCity && (
              <>
                <Row className="oneway">
                  <Col className="coloneway1">
                    
                      <h4>FROM</h4>
                      <h2>Calicut</h2>
                    
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1">
                    
                      <h4>TO</h4>
                      <h2>DUBAI</h2>
                    
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1">
                    
                      <h4>DEPARTURE</h4>
                      
                    
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1">
                      <h4>RETURN</h4>
                  </Col>
                  {/* <Col>
                    <Button variant="" className="onewaybutton">
                      <h1>TRAVELLERS AND CLASS</h1>
                    </Button>
                  </Col> */}
                </Row>
                <Row className="oneway">
                <Col className="coloneway1">
                    
                    <h4>FROM</h4>
                    <h2>Calicut</h2>
                  
                </Col>
                <div className="row vertical-line"></div>

                <Col className="coloneway1">
                  
                    <h4>TO</h4>
                    <h2>DUBAI</h2>
                  
                </Col>
                <div className="row vertical-line"></div>

                <Col className="coloneway1">
                  
                    <h4>DEPARTURE</h4>
                    
                  
                </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1">
                    
                      <Button
                        className="anothercity"
                        // onClick={() => setNewCity(!newCity)}
                        onClick={() => HANDLEADD()}
                      >
                        {" "}
                        +Add ANOTHER CITY
                      </Button>
                  </Col>

                  {/* <Col>
                    <Button variant="" className="onewaybutton">
                      <h1>TRAVELLERS AND CLASS</h1>
                    </Button>
                  </Col> */}
                </Row>
                {newCity.map((data, i) => {
                  return (
                    <>
                      <Row className="oneway">
                      <Col className="coloneway1">
                    
                    <h4>FROM</h4>
                    <h2>Calicut</h2>
                  
                </Col>
                <div className="row vertical-line"></div>

                <Col className="coloneway1">
                  
                    <h4>TO</h4>
                    <h2>DUBAI</h2>
                  
                </Col>
                <div className="row vertical-line"></div>

                <Col className="coloneway1">
                  
                    <h4>DEPARTURE</h4>
                    
                  
                </Col>
                  <div className="row vertical-line"></div>

                        <Col className="coloneway">
                            <Button variant="" className="deletebutton">
                              <Button
                                variant="dark"
                                onClick={() => DELETEHANDLER(i)}
                              >
                                x
                              </Button>
                            </Button>
                        </Col>
                      </Row>
                    </>
                  );
                })}
              </>
            )}
            {/* FARE TYPES */}
            <Row className="row3">
              <span className="faretypes">
                Select A <br />
                Fare Type:
              </span>
              <Button className="faretypesbutton" variant="">
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan">
                  Regular
                  <br />
                  Fares
                </span>{" "}
              </Button>
              <Button className="faretypesbutton1" variant="">
                {" "}
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan">
                  Armed Forces
                  <br />
                  Fares
                </span>{" "}
              </Button>
              <Button className="faretypesbutton2" variant="">
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan">
                  Student <br />
                  Fares
                </span>{" "}
              </Button>
              <Button className="faretypesbutton3" variant="">
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan">
                  Senior Citizen <br />
                  Fares
                </span>{" "}
              </Button>
              <Button className="faretypesbutton4" variant="">
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan">
                  Doctor & Nurses <br />
                  Fares
                </span>{" "}
              </Button>
              {/* <Button className="faretypesbutton5" variant=""><input type="radio" name="fare"/>1</Button> */}
            </Row>
          </Row>
          {/* <br /> */}
          {/* one way */}
        </Row>
        <Button className="searchbutton" onClick={FLIGHTHANDLER}>
          <span className="search">SEARCH</span>
        </Button>
      </Container>
    </div>
  );
}

export default FirstSection;
