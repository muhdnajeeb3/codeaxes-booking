import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Navbar,
  Row,
} from "react-bootstrap";
import "./Search.css";

function Search() {
  const [oneway,setOneway] = useState(true);
  const [roundTrip,setRoundTrip] = useState(false);
  const [multiCity,setMultiCity] = useState(false);

  const OnewayHandler = () => {
    setOneway(true);
    setMultiCity(false);
    setRoundTrip(false);
  }
  const RoundtripHandler = () => {
    setOneway(false);
    setMultiCity(false);
    setRoundTrip(true);
  }
  const MulticityHandler = () => {
    setOneway(false);
    setMultiCity(true);
    setRoundTrip(false);
  }
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
          <Row className="searchrow" style={{paddingLeft:"2rem",paddingRight:"2rem"}}>
            <div
              className="col-1"
              style={{
                background: "#0a223d",
                borderRadius: "10px",
                width: "130px",
                padding: "4px 9px 0",
                marginLeft:"2rem"
                
              }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                color:"#008cff"}}>TRIP TYPE</h5>
              <Dropdown style={{ width: "8px" }}>
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{color:"#fff"}}>
                <span className="searchstart" style={{fontSize:"17px",fontWeight:"500"}}>SELECT</span>

                  {/* <span style={{fontSize:"16px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontWeight:"500",color:"#fff"}}>SELECT</span> */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={OnewayHandler}>
                    ONE WAY
                  </Dropdown.Item>
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
              style={{ background: "#0a223d", borderRadius: "10px" ,width:"160px"}}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>FROM</h5>
                <span className="searchstart">New Delhi,India</span>
            </div>
            <div
              className="col-2"
              style={{ background: "#0a223d", borderRadius: "10px",width:"160px" }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>TO</h5>
                <span className="searchstart">Kolkata,India</span>

            </div>
            <div
              className="col-2"
              style={{ background: "#0a223d", borderRadius: "10px",width:"160px" }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>DEPART</h5>
                <span className="searchstart">Mon,Oct 23,2022</span>

            </div>
            <div
              className="col-2"
              style={{ background: "#0a223d", borderRadius: "10px",width:"160px" }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>RETURN</h5>
            </div>
            <div
              className="col-2"
              style={{ background: "#0a223d", borderRadius: "10px" ,width:"auto"}}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>PASSENGERS&CLASS</h5>
                <span className="searchstart">1Adult,Economy</span>

            </div>
            </>
              )}
              {roundTrip && (
                <>
                
            <div
              className="col-2"
              style={{ background: "#0a223d", borderRadius: "10px",width:"160px" }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>FROM</h5>
                <span className="searchstart">New Delhi,India</span>
            </div>
            <div
              className="col-2"
              style={{ background: "#0a223d", borderRadius: "10px",width:"160px" }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>TO</h5>
                <span className="searchstart">Kolkata,India</span>

            </div>
            <div
              className="col-2"
              style={{ background: "#0a223d", borderRadius: "10px" ,width:"160px"}}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>DEPART</h5>
                <span className="searchstart">Mon,Oct 23,2022</span>

            </div>
            <div
              className="col-2"
              style={{ background: "#0a223d", borderRadius: "10px",width:"160px" }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>RETURN</h5>
            </div>
            <div
              className="col-2"
              style={{ background: "#0a223d", borderRadius: "10px",width:"auto" }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>PASSENGERS&CLASS</h5>
                <span className="searchstart">1Adult,Economy</span>

            </div>
            </>
              )}
              {multiCity && (
                <>
                <div
              className="col-5"
              style={{ background: "#0a223d", borderRadius: "10px",width:"160px" }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>FROM</h5>
                <span className="searchstart">New Delhi,India</span>
            </div>
            <div
              className="col-2"
              style={{ background: "#0a223d", borderRadius: "10px",width:"auto" }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>PASSENGERS&CLASS</h5>
                <span className="searchstart">1Adult,Economy</span>

            </div>
                </>
              )}
            
          </Row>
          <div className="farerow2"  >
          <Row  style={{top:"3rem",position:"relative",background:"transparent",marginLeft:"4rem",}}>
              <span className="faretypes " style={{marginTop:"-15px",bottom:"17px"}}>
                Fare Type:
              </span>
              <Button className="faretypesbutton" variant="" style={{backgroundColor:"#364c63",borderRadius:"6px 0 0 6px"}}>
                {/* <input type="checkbox" name="fare" className="fareradio" style={{borderRadius:"40px",marginRight:"5px"}} /> */}
                <span className="farespan" style={{color:"#fff"}}>
                  Regular
                  {/* <br />
                  Fares */}
                </span>{" "}
              </Button>
              <Button className="faretypesbutton1" variant="" style={{backgroundColor:"#364c63",borderRadius:" 0 0 "}} >
                {" "}
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan" style={{color:"#fff"}}>
                  Armed Forces
                  <br />
                  {/* Fares <span className="new">NEW</span> */}
                </span>{" "}
              </Button>
              <Button className="faretypesbutton2" variant="" style={{backgroundColor:"#364c63",borderRadius:" 0 0 "}}>
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan" style={{color:"#fff"}}>
                  Student <br />
                  {/* Fares */}
                </span>{" "}
              </Button>
              <Button className="faretypesbutton3" variant="" style={{backgroundColor:"#364c63",borderRadius:" 0 0 "}}>
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan" style={{color:"#fff"}}>
                  Senior Citizen <br />
                  {/* Fares */}
                </span>{" "}
              </Button>
              <Button className="faretypesbutton4" variant="" style={{backgroundColor:"#364c63",borderRadius:" 0 0 "}}>
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan" style={{color:"#fff"}}>
                  Doctor & Nurses <br />
                  {/* Fares */}
                </span>{" "}
              </Button>
              <Button className="faretypesbutton4" variant="" style={{backgroundColor:"#364c63",borderRadius:" 0 6px 6px 0 "}}>
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan" style={{color:"#fff"}}>
                  Double Seat <br />
                  {/* Fares */}
                </span>{" "}
              </Button>
              {/* <Button className="faretypesbutton5" variant=""><input type="radio" name="fare"/>1</Button> */}
            </Row>
          </div>
          
        {/* </Container> */}
      </div>
      <div className="searchcenter"></div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Popular Filter</h1>
            <div className="lsitem">
              
              <input placeholder="" type="checkbox" style={{marginRight:"auto"}}/>
              <label htmlFor="">Destination</label>
            </div>
            
            <div className="lsitem">
              <label>Options</label>

              <div className="lsOptions">
                
                
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default Search;
