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
          <span className="bidf">Book International and Domestic Flights</span>
          <Row>
            {/* oneway */}
            {oneWay && (
              <>
                <Row className="oneway">
                  <Col className="coloneway">
                    <Button
                      variant=""
                      className="onewaybutton"
                      onClick={() => setFrom(!from)}
                    >
                      {from && (
                        <>
                          <input
                            type="search"
                            placeholder="Search employe..."
                            // className="input"
                            onChange={(e) => {
                              setSearchTerm(e.target.value);
                            }}
                          />
                          <>
            {from && 
            
              Records.filter((record) => {
                if (searchTerm === "") {
                  return record;
                } else if (
                  record.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return record;
                }
              }).map((record) => {
                return (

                  <div className="card1" key={record.id}>
                    {/* <input type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" class="react-autosuggest__input react-autosuggest__input--open" placeholder="From" value></input> */}
                    {/* <h4 className='name'>{record.name}</h4> */}


                    <lablel>
                      <span className="name">{record.name}</span>
                    </lablel>
                  </div>
                );
              })}
          </>
                        </>
                      )}
                      <h6>FROM</h6>
                      <br />
                      <h2>{from}</h2>
                    </Button>
                  </Col>
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h6>TO</h6>
                      <br />
                      <h2>Dubai</h2>
                    </Button>
                  </Col>
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h6>DEPARTURE</h6>
                    </Button>
                  </Col>
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h6>RETURN</h6>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="" className="onewaybutton">
                      <h6>TRAVELLERS AND CLASS</h6>
                    </Button>
                  </Col>
                </Row>
              </>
            )}
            {/* round trip */}
            {roundTrip && (
              <>
                <Row className="oneway">
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h4>FROM</h4>
                      <br />
                      <h2>Calicut</h2>
                    </Button>
                  </Col>
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h4>TO</h4>
                      <br />
                      <h2>Dubai</h2>
                    </Button>
                  </Col>
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h4>DEPARTURE</h4>
                    </Button>
                  </Col>
                  <Col className="coloneway">
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
            {multiCity && (
              <>
                <Row className="oneway">
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h4>FROM</h4>
                      <br />
                      <h2>Calicut</h2>
                    </Button>
                  </Col>
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h4>TO</h4>
                      <br />
                      <h2>Dubai</h2>
                    </Button>
                  </Col>
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h4>DEPARTURE</h4>
                    </Button>
                  </Col>
                  <Col className="coloneway">
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
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h4>FROM</h4>
                      <br />
                      <h2>Calicut</h2>
                    </Button>
                  </Col>
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h4>TO</h4>
                      <br />
                      <h2>Dubai</h2>
                    </Button>
                  </Col>
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <h4>DEPARTURE</h4>
                    </Button>
                  </Col>
                  <Col className="coloneway">
                    <Button variant="" className="onewaybutton">
                      <Button
                        className="anothercity"
                        // onClick={() => setNewCity(!newCity)}
                        onClick={() => HANDLEADD()}
                      >
                        {" "}
                        +Add ANOTHER CITY
                      </Button>
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
                        <Col className="coloneway">
                          <Button variant="" className="onewaybutton">
                            <h4>FROM</h4>
                            <br />
                            <h2>Calicut</h2>
                          </Button>
                        </Col>
                        <Col className="coloneway">
                          <Button variant="" className="onewaybutton">
                            <h4>TO</h4>
                            <br />
                            <h2>Dubai</h2>
                          </Button>
                        </Col>
                        <Col className="coloneway">
                          <Button variant="" className="onewaybutton">
                            <h4>DEPARTURE </h4>
                          </Button>
                        </Col>
                        <Col className="coloneway">
                          <Button variant="" className="onewaybutton">
                            <Button variant="" className="deletebutton">
                              <Button
                                variant="dark"
                                onClick={() => DELETEHANDLER(i)}
                              >
                                x
                              </Button>
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
