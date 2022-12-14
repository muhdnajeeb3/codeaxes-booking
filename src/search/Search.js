import { faPlane, faPlaneArrival } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Search.css";

function Search() {
  const [oneway, setOneway] = useState(true);
  const [roundTrip, setRoundTrip] = useState(false);
  const [multiCity, setMultiCity] = useState(false);
  const [viewPrices,setViewPrices] = useState("");
  const [optionsavailable,setOptionsavailble] = useState("");
  const [multiCardPrices,setMultiCardPrices] = useState("");


  const OnewayHandler = () => {
    setOneway(true);
    setMultiCity(false);
    setRoundTrip(false);
  };
  const RoundtripHandler = () => {
    setOneway(false);
    setMultiCity(false);
    setRoundTrip(true);
  };
  const MulticityHandler = () => {
    setOneway(false);
    setMultiCity(true);
    setRoundTrip(false);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="search">
      <Navbar expand="lg" style={{ height: "5rem" }}>
        <Navbar.Brand
          href="/"
          className="logo"
          style={{ marginBottom: "2rem", marginLeft: "9rem" }}
        >
          LOGO
        </Navbar.Brand>
      </Navbar>
      <div className="searchfirstsec">
        {/* <Container className="searchcontainer"> */}
        <Row
          className="searchrow"
          style={{ padding: "0 4em", paddingRight: "0rem" }}
        >
          <div
            className="col-1"
            style={{
              background: "#0a223d",
              borderRadius: "10px",
              width: "130px",
              padding: "4px 9px 0",
              marginLeft: "2rem",
            }}
          >
            <h5
              style={{
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                color: "#008cff",
              }}
            >
              TRIP TYPE
            </h5>
            <Dropdown style={{ width: "8px" }}>
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                style={{ color: "#fff" }}
              >
                <span
                  className="searchstart"
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  SELECT
                </span>

                {/* <span style={{fontSize:"16px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontWeight:"500",color:"#fff"}}>SELECT</span> */}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={OnewayHandler}>ONE WAY</Dropdown.Item>
                <Dropdown.Item onClick={RoundtripHandler}>
                  ROUND TRIP
                </Dropdown.Item>
                <Dropdown.Item onClick={MulticityHandler}>
                  MULTI CITY
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {oneway && (
            <>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  FROM
                </h5>
                <span className="searchstart">New Delhi,India</span>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  TO
                </h5>
                <span className="searchstart">Kolkata,India</span>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  DEPART
                </h5>
                <span className="searchstart">Mon,Oct 23,2022</span>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  RETURN
                </h5>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "auto",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  PASSENGERS&CLASS
                </h5>
                <span className="searchstart">1Adult,Economy</span>
              </div>
            </>
          )}
          {roundTrip && (
            <>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  FROM
                </h5>
                <span className="searchstart">New Delhi,India</span>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  TO
                </h5>
                <span className="searchstart">Kolkata,India</span>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  DEPART
                </h5>
                <span className="searchstart">Mon,Oct 23,2022</span>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  RETURN
                </h5>
              </div>
              <div
                className="colmn6"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "auto",
                  marginLeft: "2rem",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  PASSENGERS&CLASS
                </h5>
                <span className="searchstart">1Adult,Economy</span>
              </div>
            </>
          )}
          {multiCity && (
            <>
              <div
                className="col-5"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  FROM
                </h5>
                <span className="searchstart">New Delhi,India</span>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "auto",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  PASSENGERS&CLASS
                </h5>
                <span className="searchstart">1Adult,Economy</span>
              </div>
            </>
          )}
        </Row>
        <Row>
          <div className="farerow2">
            <Row
              style={{
                top: "3rem",
                position: "relative",
                background: "transparent",
                marginLeft: "9rem",
              }}
            >
              <span
                className="faretypes "
                style={{ marginTop: "-11px", bottom: "17px" }}
              >
                Fare Type:
              </span>
              <Button
                className="faretypesbutton"
                variant=""
                style={{
                  backgroundColor: "#364c63",
                  borderRadius: "6px 0 0 6px",
                }}
              >
                {/* <input type="checkbox" name="fare" className="fareradio" style={{borderRadius:"40px",marginRight:"5px"}} /> */}
                <span className="farespan" style={{ color: "#fff" }}>
                  Regular
                  {/* <br />
                  Fares */}
                </span>{" "}
              </Button>
              <Button
                className="faretypesbutton1"
                variant=""
                style={{ backgroundColor: "#364c63", borderRadius: " 0 0 " }}
              >
                {" "}
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan" style={{ color: "#fff" }}>
                  Armed Forces
                  <br />
                  {/* Fares <span className="new">NEW</span> */}
                </span>{" "}
              </Button>
              <Button
                className="faretypesbutton2"
                variant=""
                style={{ backgroundColor: "#364c63", borderRadius: " 0 0 " }}
              >
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan" style={{ color: "#fff" }}>
                  Student <br />
                  {/* Fares */}
                </span>{" "}
              </Button>
              <Button
                className="faretypesbutton3"
                variant=""
                style={{ backgroundColor: "#364c63", borderRadius: " 0 0 " }}
              >
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan" style={{ color: "#fff" }}>
                  Senior Citizen <br />
                  {/* Fares */}
                </span>{" "}
              </Button>
              <Button
                className="faretypesbutton4"
                variant=""
                style={{ backgroundColor: "#364c63", borderRadius: " 0 0 " }}
              >
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan" style={{ color: "#fff" }}>
                  Doctor & Nurses <br />
                  {/* Fares */}
                </span>{" "}
              </Button>
              <Button
                className="faretypesbutton4"
                variant=""
                style={{
                  backgroundColor: "#364c63",
                  borderRadius: " 0 6px 6px 0 ",
                }}
              >
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan" style={{ color: "#fff" }}>
                  Double Seat <br />
                  {/* Fares */}
                </span>{" "}
              </Button>
              {/* <Button className="faretypesbutton5" variant=""><input type="radio" name="fare"/>1</Button> */}
            </Row>
          </div>
        </Row>

        {/* </Container> */}
      </div>
      <div
        className="searchcenter"
        style={{ position: "relative", padding: "0 2em" }}
      ></div>
      <Container
        fluid
        style={{
          background: "#e5eef4",
          color: "rgba(0,0,0,.85)",
          fontSize: "",
          fontFamily: "sans-serif",
          fontWeight: "",
        }}
      >
        <Row style={{ display: "flex", flexDirection: "row" }}>
          <Col md={4} className="colfilter">
            <Card
              style={{
                justifyItems: "",
                textAlign: "",
                background: "#fff",
                maxWidth: "27rem",
                marginLeft: "auto",
                padding: "10px",
                marginTop: "10px",
                height: "24rem",
              }}
            >
              <Row style={{ display: "flex", flexDirection: "row" }}>
                <span className="filtertitle">Popular Filter</span>
              </Row>
              {/* <Row style={{display:"flex",flexDirection:"row",flex:"flexWrap"}}>
            <Form.Check type="checkbox" label="Check me out" style={{marginLeft:"10px",fontSize:"13px"}} />
            <span className="filterprice">$2345</span>
            </Row> */}
              <Row style={{ display: "flex", flexDirection: "row" }}>
                <Col sm="auto">
                  <input type="checkbox" />
                </Col>
                <Col sm="auto">
                  <span className="filtername">Refundable Fares(68)</span>
                </Col>
                <Col
                  as="p"
                  sm="auto"
                  style={{ marginLeft: "auto", position: "relative" }}
                >
                  <span className="filterprice" style={{ textAlign: "start" }}>
                    $3333
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm="auto">
                  <input type="checkbox" />
                </Col>
                <Col sm="auto">
                  <span className="filtername">Refundable Fares(68)</span>
                </Col>
                <Col
                  as="p"
                  sm="auto"
                  style={{ marginLeft: "auto", position: "relative" }}
                >
                  <span className="filterprice" style={{ textAlign: "start" }}>
                    $3333
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm="auto">
                  <input type="checkbox" />
                </Col>
                <Col sm="auto">
                  <span className="filtername">Non Stop(37)</span>
                </Col>
                <Col
                  as="p"
                  sm="auto"
                  style={{ marginLeft: "auto", position: "relative" }}
                >
                  <span className="filterprice" style={{ textAlign: "start" }}>
                    $3333
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm="auto">
                  <input type="checkbox" />
                </Col>
                <Col sm="auto">
                  <span className="filtername">IndiGo(34)</span>
                </Col>
                <Col
                  as="p"
                  sm="auto"
                  style={{ marginLeft: "auto", position: "relative" }}
                >
                  <span className="filterprice" style={{ textAlign: "start" }}>
                    $3333
                  </span>
                </Col>
              </Row>
              {/* <Row style={{ justifyContent: "space-between" }}> */}
              {/* <div style={{ display: "flex" }}> */}
              {/* <Form.Check */}
              {/* type="checkbox" */}
              {/* label="Check me out" */}
              {/* style={{ marginLeft: "10px", fontSize: "13px" }} */}
              {/* /> */}
              {/* </div> */}
              {/* <span className="filterprice">$2345</span>
            <span className="filterprice">$2345</span> */}
              {/* <div style={{ display: "flex" }}>1</div> */}
              {/* <Col
                // as="p"
                sm="3"
                style={{ marginLeft: "auto",marginBottom:"10px", position: "relative" }}
              >
                <span className="filterprice" style={{ textAlign: "start" }}>
                  $3333
                </span>
              </Col> */}
              {/* </Row> */}
            </Card>
          </Col>
          <Col md={7} style={{ margin: "" }} className="coldetails">
            <Row>
              <span
                style={{ color: "#fff", marginLeft: "2rem", color: "#fff" }}
              >
                <b>Flights From New Delhi to Doha</b>
              </span>
            </Row>
            <Row>
              <Row className="mysafetycard">
                <h1
                  style={{
                    fontSize: "14px",
                    marginTop: "12px",
                    fontWeight: "bolder",
                    marginLeft: "1rem",
                  }}
                >
                  Important Advisories & StatenGuidelies
                </h1>
                <br />
                <span
                  style={{
                    marginBottom: "0",
                    fontSize: "12px",
                    padding:"2px",
                    fontWeight: "400",
                    marginLeft: "1.5rem",
                    marginTop: "-25px",
                    lineHeigh:"1.5",
                    bottom: "2rem",
                    fontFamily: "sans-serif",
                  }}
                >
                  with travel opening up.govt,advisories and state/UT guidelines
                  are constantly evolving,Please check the latest updates before
                  travelling.
                  
                </span>
              </Row>
            </Row>
            <Row
              style={{
                backgroundColor: "#fff",
                marginTop: "10px",
                marginLeft: "2rem",
              }}
              className="listingcards"
            >
              <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
                <Col>
                  <FontAwesomeIcon icon={faPlane} size="1x" />

                  <span className="airlinenames" style={{ marginLeft: "8px" ,lineHeight:"1.5"}}>
                    IndiGo
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "11px",
                      marginLeft: "2.2rem",
                      color: "#878787",
                      lineHeight:"1.5"

                    }}
                  >
                    6E 5009
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "900",
                      fontFamily: "sans-serif",
                      color: "#000",
                      display: "inline-flex",
                      lineHeight:"1.5"
                    }}
                  >
                    21:30
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    New Delhi
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                      fontWeight: "400",
                      color: "rgba(0,0,0,.85)",
                      lineHeight:"1.5",
                      height:"10px"
                    }}
                  >
                    02 h 45 m
                  </span>
                  <br />
                  <span
                    style={{
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "120px",
                      color: "#6d7278",
                      lineHeight:"1.5"
                    }}
                  >
                    Non stop
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "900",
                      fontFamily: "sans-serif",
                      color: "#000",
                      display: "inline-flex",
                      lineHeight:"1.5"
                    }}
                  >
                    01:15
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "13px",
                      lineHeight:"1.5",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Bengaluru
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      lineHeight:"1.5",
                      fontWeight: "900",
                      fontSize: "19px",
                      fontFamily: "sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    $4443
                  </span>
                </Col>
                <Col>
                  <Button
                    style={{
                      background: "#daebff",
                      fontWeight: "700",
                      width: "120px",
                      fontSize: "13px",
                      alignItems: "center",
                      lineHeight: "inherit",
                      fontFamily: "inherit",
                      justifyContent: "center",
                      display: "flex",
                      height: "31px",
                      padding: "0 8px",
                      color: "#008cff",
                      borderRadius: "96px",
                      border: "1px solid #008cff",
                    }}
                    onClick={()=>setViewPrices(!viewPrices)}
                  >
                    VIEW PRICES
                  </Button>
                </Col>
              </Row>
              

              <Row>
                <span
                  style={{
                    color: "#0091ff",
                    fontSize: "15px",
                    textAlign: "end",
                  }}
                >
                  <Link
                    to="/hey"
                    style={{
                      color: "#0091fe",
                      fontWeight: "400",
                      textDecoration: "none",
                    }}
                  >
                    View Flight Details
                  </Link>
                </span>
              </Row>
            </Row>
            {/* VIEW PRICES */}
          {viewPrices && (
            <>
            <Row
              style={{
                backgroundColor: "#f3f6f9",
                // marginTop: "10px",
                marginLeft: "2rem",
                fontWeight:"400",
                // paddingBottom:"20p
                lineHeight:"0"
                // height:"40px"
              }}
              className="viewprices"
            >
              
               <Col style={{maxWidth:"120px"}}><span style={{fontSize:"10px",marginLeft:""}}>FARES</span></Col>
                  <Col style={{maxWidth:"79px"}} ><span style={{fontSize:"10px",marginLeft:""}}>CABIN BAG</span></Col>
                  <Col style={{maxWidth:"73px"}}><span style={{fontSize:"10px",marginLeft:""}}>CHECK-IN</span></Col>
                  <Col style={{maxWidth:"100px"}}><span style={{fontSize:"10px",marginLeft:""}}>CANCELLATION</span></Col>
                  <Col style={{maxWidth:"110px"}}><span style={{fontSize:"10px" ,marginLeft:""}}>DATE CHANGE</span></Col>
                  <Col style={{maxWidth:"80px"}}><span style={{fontSize:"10px",marginLeft:""}}>SEAT</span></Col>
                  <Col style={{maxWidth:"70px"}}><span style={{fontSize:"10px",marginLeft:""}}>MEAL</span></Col>

            </Row>
            <Row
              style={{
                backgroundColor: "#fff",
                // marginTop: "10px",
                marginLeft: "2rem",
                fontFamily:"sans-serif",
                lineHeight:"1.5"
              }}
              className="viewprices"
            >
               
                  <Col style={{maxWidth:"150px"}}><span style={{fontSize:"14px",fontWeight:"900"}}>Saver <br/></span> <span style={{fontWeight:"400",fontSize:"12px",lineHeight:"1.5"}}> Fare offered by airlines.</span> </Col>
                  <Col style={{maxWidth:"60px"}} ><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>7Kg</span></Col>
                  <Col style={{maxWidth:"55px"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>15Kg</span></Col>
                  <Col style={{maxWidth:"85px"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>Cancellation fee starting $3900</span></Col>
                  <Col style={{maxWidth:"95px"}}><span style={{fontSize:"12px" ,fontWeight:"400",marginLeft:""}}>Date Change fee starting $3450</span></Col>
                  <Col style={{maxWidth:"120px"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>Middle Seat Free</span></Col>
                  <Col style={{maxWidth:"95px"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>----</span></Col>
                  <Col style={{maxWidth:"95px"}}>
                  <span
                    style={{
                      lineHeight:"1.5",
                      fontWeight: "900",
                      fontSize: "19px",
                      fontFamily: "sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    $4443
                  </span><br/>
                  <Button style={{width:"124px",fontWeight:"900",backgroundImage:"linear-gradient(97deg,#53b2fe,#065af3 130%)",borderRadius:"35px",boxShadow:"0 1px 7px 0 rgb(0 0 0 / 22%)",color:"#fff",alignItems:"center",justifyContent:"center",height:"32px",padding:"0 20px",outline:"none",fontSize:"13px"}}>BOOK NOW</Button>
                  </Col> 
            </Row>
            <Row
              style={{
                backgroundColor: "#fff",
                // marginTop: "10px",
                marginLeft: "2rem",
                fontFamily:"sans-serif",
                lineHeight:"1.5"
              }}
              className="viewprices"
            >
               
                  <Col style={{maxWidth:"150px"}}><span style={{fontSize:"14px",fontWeight:"900"}}>Flexi plus<br/></span> <span style={{fontWeight:"400",fontSize:"12px",lineHeight:"1.5"}}> Fare offered by airline.</span> </Col>
                  <Col style={{maxWidth:"60px"}} ><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>7Kg</span></Col>
                  <Col style={{maxWidth:"55px"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>15Kg</span></Col>
                  <Col style={{maxWidth:"85px"}}><span style={{fontSize:"12px",fontWeight:"400",margin:"0",padding:"0"}}>Cancellation fee starting $3500</span></Col>
                  <Col style={{maxWidth:"95px"}}><span style={{fontSize:"12px" ,fontWeight:"400",marginLeft:""}}>Date Change fee starting $3250</span></Col>
                  <Col style={{maxWidth:"120px"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>Free Seats Available</span></Col>
                  <Col style={{maxWidth:"95px"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>Get Complimentary meals</span></Col>
                  <Col style={{maxWidth:"95px"}}>
                  <span
                    style={{
                      lineHeight:"1.5",
                      fontWeight: "900",
                      fontSize: "19px",
                      fontFamily: "sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    $4443
                  </span><br/>
                  <Button style={{width:"124px",fontWeight:"900",backgroundImage:"linear-gradient(97deg,#53b2fe,#065af3 130%)",borderRadius:"35px",boxShadow:"0 1px 7px 0 rgb(0 0 0 / 22%)",color:"#fff",alignItems:"center",justifyContent:"center",height:"32px",padding:"0 20px",outline:"none",fontSize:"13px"}}>BOOK NOW</Button>
                  </Col> 
            </Row>
            
            </>
          )}
            <Row
              style={{
                backgroundColor: "#fff",
                marginTop: "10px",
                marginLeft: "2rem",
              }}
              className="listingcards"
            >
              <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
                <Col>
                  <FontAwesomeIcon icon={faPlane} size="1x" />

                  <span className="airlinenames" style={{ marginLeft: "8px" ,lineHeight:"1.5"}}>
                    IndiGo
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "11px",
                      marginLeft: "2.2rem",
                      color: "#878787",
                      lineHeight:"1.5"

                    }}
                  >
                    6E 5009
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "900",
                      fontFamily: "sans-serif",
                      color: "#000",
                      display: "inline-flex",
                      lineHeight:"1.5"
                    }}
                  >
                    21:30
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    New Delhi
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                      fontWeight: "400",
                      color: "rgba(0,0,0,.85)",
                      lineHeight:"1.5"

                    }}
                  >
                    02 h 45 m
                  </span>
                  <br />
                  <span
                    style={{
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "120px",
                      color: "#6d7278",
                      lineHeight:"1.5"
                    }}
                  >
                    Non stop
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "900",
                      fontFamily: "sans-serif",
                      color: "#000",
                      display: "inline-flex",
                      lineHeight:"1.5"
                    }}
                  >
                    01:15
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "13px",
                      lineHeight:"1.5",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Bengaluru
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      lineHeight:"1.5",
                      fontWeight: "900",
                      fontSize: "19px",
                      fontFamily: "sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    $4443
                  </span>
                </Col>
                <Col>
                  <Button
                    style={{
                      background: "#daebff",
                      fontWeight: "700",
                      width: "120px",
                      fontSize: "13px",
                      alignItems: "center",
                      lineHeight: "inherit",
                      fontFamily: "inherit",
                      justifyContent: "center",
                      display: "flex",
                      height: "31px",
                      padding: "0 8px",
                      color: "#008cff",
                      borderRadius: "96px",
                      border: "1px solid #008cff",
                    }}
                  >
                    VIEW PRICES
                  </Button>
                </Col>
              </Row>
              <Row>
                <span
                  style={{
                    color: "#0091ff",
                    fontSize: "15px",
                    textAlign: "end",
                  }}
                >
                  <Link
                    to="/hey"
                    style={{
                      color: "#0091fe",
                      fontWeight: "400",
                      textDecoration: "none",
                    }}
                  >
                    View Flight Details
                  </Link>
                </span>
              </Row>
            </Row>
            {/* multi shadow card */}
            <Row
              style={{
                backgroundColor: "#b9daf0",
                marginTop: "10px",
                marginLeft: "2rem",
                borderRadius:"2px",
                borderTop:"8px solid #e5eef5",
                fontFamily:"sans-serif"
                // fontWeight:"400"
              }}
              className="listingcards"
            >
              <Row style={{justifyContent:"",lineHeight:"1.5",display:"flex"}}>
                <div>

                
                <div className="" style={{float:"left"}}><span style={{fontWeight:"700",fontSize:"18px",fontFamily:"sans-serif"}}>Some more options with stopovers($8,905-$12,009)</span></div>
                <div className="" style={{float:"right"}}><span  style={{fontSize:"13px",fontWeight:"400",cursor:"pointer"}} onClick={()=>setOptionsavailble(!optionsavailable)}>2 options available</span></div>
                </div>
              </Row>
              <Row className="multicards" style={{background:"#fff",padding:'16px 20px 10px',zIndex:"1",borderRadius:"4px",borderTop:"none",marginTop:"20px",marginLeft:"5px"}}>
              <Col>
                  <FontAwesomeIcon icon={faPlane} size="1x" />

                  <span className="airlinenames" style={{ marginLeft: "8px" ,lineHeight:"1.5"}}>
                    IndiGo
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "11px",
                      marginLeft: "2.2rem",
                      color: "#878787",
                      lineHeight:"1.5"

                    }}
                  >
                    6E 5009
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "900",
                      fontFamily: "sans-serif",
                      color: "#000",
                      display: "inline-flex",
                      lineHeight:"1.5"
                    }}
                  >
                    21:30
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    New Delhi
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                      fontWeight: "400",
                      color: "rgba(0,0,0,.85)",
                      lineHeight:"1.5"

                    }}
                  >
                    02 h 45 m
                  </span>
                  <br />
                  <span
                    style={{
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "120px",
                      color: "#6d7278",
                      lineHeight:"1.5"
                    }}
                  >
                    Non stop
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "900",
                      fontFamily: "sans-serif",
                      color: "#000",
                      display: "inline-flex",
                      lineHeight:"1.5"
                    }}
                  >
                    01:15
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "13px",
                      lineHeight:"1.5",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Bengaluru
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      lineHeight:"1.5",
                      fontWeight: "900",
                      fontSize: "19px",
                      fontFamily: "sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    $4443
                  </span>
                </Col>
                <Col>
                  <Button
                    style={{
                      background: "#daebff",
                      fontWeight: "700",
                      width: "120px",
                      fontSize: "13px",
                      alignItems: "center",
                      lineHeight: "inherit",
                      fontFamily: "inherit",
                      justifyContent: "center",
                      display: "flex",
                      height: "31px",
                      padding: "0 8px",
                      color: "#008cff",
                      borderRadius: "96px",
                      border: "1px solid #008cff",
                    }}
                    onClick={()=>setMultiCardPrices(!multiCardPrices)}
                  >
                    VIEW PRICES
                  </Button>
                </Col>


              </Row>
              {multiCardPrices && (
                <>
                <Row
              style={{
                backgroundColor: "#f3f6f9",
                // marginTop: "10px",
                marginLeft: "5px",
                fontWeight:"400",
                // paddingBottom:"20p
                lineHeight:"0"
                // height:"40px"
              }}
              className="viewprices"
            >
              
               <Col style={{maxWidth:"100px"}}><span style={{fontSize:"10px",marginLeft:""}}>FARES</span></Col>
               <Col style={{maxWidth:"72px",}} ><span style={{fontSize:"10px",marginLeft:""}}>Other</span></Col>
                  <Col style={{maxWidth:"79px",marginRight:"-1rem"}} ><span style={{fontSize:"10px",marginLeft:""}}>CABIN BAG</span></Col>
                  <Col style={{maxWidth:"73px",marginRight:"-1rem"}}><span style={{fontSize:"10px",}}>CHECK-IN</span></Col>
                  <Col style={{maxWidth:"100px",marginRight:"-1rem"}}><span style={{fontSize:"10px",marginLeft:""}}>CANCELLATION</span></Col>
                  <Col style={{maxWidth:"110px",marginRight:"-1rem"}}><span style={{fontSize:"10px" ,marginLeft:""}}>DATE CHANGE</span></Col>
                  <Col style={{maxWidth:"80px",marginRight:"-1rem"}}><span style={{fontSize:"10px",marginLeft:""}}>SEAT</span></Col>
                  <Col style={{maxWidth:"70px"}}><span style={{fontSize:"10px",marginLeft:""}}>MEAL</span></Col>

            </Row>
            <Row
              style={{
                backgroundColor: "#fff",
                // marginTop: "10px",
                marginLeft: "5px",
                fontFamily:"sans-serif",
                lineHeight:"0.8"
              }}
              className="viewprices"
            >
               
                  <Col style={{maxWidth:"100px"}}><span style={{fontSize:"14px",fontWeight:"900"}}>GoFirst <br/></span> <span style={{fontWeight:"400",fontSize:"12px",lineHeight:"1.5"}}> Fare offered by airlines.</span> </Col>
               <Col style={{maxWidth:"87px",}} ><span style={{fontSize:"10px",marginLeft:""}}>------</span></Col>
                  <Col style={{maxWidth:"79px",marginRight:"-1rem"}} ><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>7Kg</span></Col>
                  <Col style={{maxWidth:"73px",marginRight:"-1rem"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>15Kg</span></Col>
                  <Col style={{maxWidth:"100px",marginRight:"-1rem"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>Cancellation fee starting $3900</span></Col>
                  <Col style={{maxWidth:"110px",marginRight:"-1rem"}}><span style={{fontSize:"12px" ,fontWeight:"400",marginLeft:""}}>Date Change fee starting $3450</span></Col>
                  <Col style={{maxWidth:"80px",marginRight:"00px"}}><span style={{fontSize:"12px" ,fontWeight:"400",marginLeft:""}}>Chargeable</span></Col>
                  <Col style={{maxWidth:"70px",marginRight:"1rem"}}><span style={{fontSize:"10px",marginLeft:""}}>----</span></Col>

                  <Col style={{maxWidth:"95px",justifyContent:"end",alignItems:"end"}}>
                  <span
                    style={{
                      lineHeight:"1.5",
                      fontWeight: "900",
                      fontSize: "19px",
                      fontFamily: "sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    $2643
                  </span><br/>
                  <Button style={{width:"124px",fontWeight:"900",backgroundImage:"linear-gradient(97deg,#53b2fe,#065af3 130%)",borderRadius:"35px",boxShadow:"0 1px 7px 0 rgb(0 0 0 / 22%)",color:"#fff",alignItems:"center",justifyContent:"center",height:"32px",padding:"0 20px",outline:"none",fontSize:"13px"}}>BOOK NOW</Button>
                  </Col> 
            </Row>
            <Row
              style={{
                backgroundColor: "#fff",
                // marginTop: "10px",
                marginLeft: "5px",
                fontFamily:"sans-serif",
                lineHeight:"0.8"
              }}
              className="viewprices"
            >
                  <Col style={{maxWidth:"100px"}}><span style={{fontSize:"14px",fontWeight:"900"}}>GoFlexi <br/></span> <span style={{fontWeight:"400",fontSize:"12px",lineHeight:"1.5"}}> Fare offered by airlines.</span> </Col>
               <Col style={{maxWidth:"87px",}} ><span style={{fontSize:"10px",marginLeft:""}}>------</span></Col>
                  <Col style={{maxWidth:"79px",marginRight:"-1rem"}} ><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>7Kg</span></Col>
                  <Col style={{maxWidth:"73px",marginRight:"-1rem"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>15Kg</span></Col>
                  <Col style={{maxWidth:"100px",marginRight:"-1rem"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>Cancellation fee starting $3900</span></Col>
                  <Col style={{maxWidth:"110px",marginRight:"-1rem"}}><span style={{fontSize:"12px" ,fontWeight:"400",marginLeft:""}}> Free Date Change allowed upto 2hrs before</span></Col>
                  <Col style={{maxWidth:"80px",marginRight:"00px"}}><span style={{fontSize:"12px" ,fontWeight:"400",marginLeft:""}}>Free seats availble</span></Col>
                  <Col style={{maxWidth:"70px",marginRight:"1rem"}}><span style={{fontSize:"11px" ,fontWeight:"400",marginLeft:""}}>Get complementary meals</span></Col>

                  <Col style={{maxWidth:"95px",justifyContent:"end",alignItems:"end"}}>
                  <span
                    style={{
                      lineHeight:"1.5",
                      fontWeight: "900",
                      fontSize: "19px",
                      fontFamily: "sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    $2643
                  </span><br/>
                  <Button style={{width:"124px",fontWeight:"900",backgroundImage:"linear-gradient(97deg,#53b2fe,#065af3 130%)",borderRadius:"35px",boxShadow:"0 1px 7px 0 rgb(0 0 0 / 22%)",color:"#fff",alignItems:"center",justifyContent:"center",height:"32px",padding:"0 20px",outline:"none",fontSize:"13px"}}>BOOK NOW</Button>
                  </Col> 
            </Row>
            <Row
              style={{
                backgroundColor: "#fff",
                // marginTop: "10px",
                marginLeft: "5px",
                fontFamily:"sans-serif",
                lineHeight:"0.8"
              }}
              className="viewprices"
            >
                  <Col style={{maxWidth:"100px"}}><span style={{fontSize:"14px",fontWeight:"900"}}>GoMore <br/></span> <span style={{fontWeight:"400",fontSize:"12px",lineHeight:"1.5"}}> Fly stress free! Keep the middle seat vacant.</span> </Col>
               <Col style={{maxWidth:"87px",}} ><span style={{fontSize:"12px",marginLeft:"",fontWeight:"400"}}>1st/2nd row window or aisle seat included,with vacant middle seat</span></Col>
                  <Col style={{maxWidth:"79px",marginRight:"-1rem"}} ><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>7Kg</span></Col>
                  <Col style={{maxWidth:"73px",marginRight:"-1rem"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>15Kg</span></Col>
                  <Col style={{maxWidth:"100px",marginRight:"-1rem"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:""}}>Cancellation fee starting $3900</span></Col>
                  <Col style={{maxWidth:"110px",marginRight:"-1rem"}}><span style={{fontSize:"12px" ,fontWeight:"400",marginLeft:""}}>Date Change allowed fee starting $3000</span></Col>
                  <Col style={{maxWidth:"80px",marginRight:"00px"}}><span style={{fontSize:"12px" ,fontWeight:"400",marginLeft:""}}>Free seats availble</span></Col>
                  <Col style={{maxWidth:"70px",marginRight:"1rem"}}><span style={{fontSize:"11px" ,fontWeight:"400",marginLeft:""}}>----</span></Col>

                  <Col style={{maxWidth:"95px",justifyContent:"end",alignItems:"end"}}>
                  <span
                    style={{
                      lineHeight:"1.5",
                      fontWeight: "900",
                      fontSize: "19px",
                      fontFamily: "sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    $2643
                  </span><br/>
                  <Button style={{width:"124px",fontWeight:"900",backgroundImage:"linear-gradient(97deg,#53b2fe,#065af3 130%)",borderRadius:"35px",boxShadow:"0 1px 7px 0 rgb(0 0 0 / 22%)",color:"#fff",alignItems:"center",justifyContent:"center",height:"32px",padding:"0 20px",outline:"none",fontSize:"13px"}}>BOOK NOW</Button>
                  </Col> 
            </Row>
            
                </>
              )}
              { optionsavailable && (
                <>
                <Row className="multidropshadow" style={{background:"#fff",padding:'16px 20px 10px',zIndex:"1",borderRadius:"4px",borderTop:"none",marginTop:"20px",marginLeft:"5px"}}>
              <Col>
                  <FontAwesomeIcon icon={faPlane} size="1x" />

                  <span className="airlinenames" style={{ marginLeft: "8px" ,lineHeight:"1.5"}}>
                    IndiGo
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "11px",
                      marginLeft: "2.2rem",
                      color: "#878787",
                      lineHeight:"1.5"

                    }}
                  >
                    6E 5009
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "900",
                      fontFamily: "sans-serif",
                      color: "#000",
                      display: "inline-flex",
                      lineHeight:"1.5"
                    }}
                  >
                    21:30
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    New Delhi
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                      fontWeight: "400",
                      color: "rgba(0,0,0,.85)",
                      lineHeight:"1.5"

                    }}
                  >
                    02 h 45 m
                  </span>
                  <br />
                  <span
                    style={{
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "120px",
                      color: "#6d7278",
                      lineHeight:"1.5"
                    }}
                  >
                    Non stop
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "900",
                      fontFamily: "sans-serif",
                      color: "#000",
                      display: "inline-flex",
                      lineHeight:"1.5"
                    }}
                  >
                    01:15
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "13px",
                      lineHeight:"1.5",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Bengaluru
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      lineHeight:"1.5",
                      fontWeight: "900",
                      fontSize: "19px",
                      fontFamily: "sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    $4443
                  </span>
                </Col>
                <Col>
                  <Button
                    style={{
                      background: "#daebff",
                      fontWeight: "700",
                      width: "120px",
                      fontSize: "13px",
                      alignItems: "center",
                      lineHeight: "inherit",
                      fontFamily: "inherit",
                      justifyContent: "center",
                      display: "flex",
                      height: "31px",
                      padding: "0 8px",
                      color: "#008cff",
                      borderRadius: "96px",
                      border: "1px solid #008cff",
                    }}
                  >
                    VIEW PRICES
                  </Button>
                </Col>


              </Row>
                </>
              )}
              

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
