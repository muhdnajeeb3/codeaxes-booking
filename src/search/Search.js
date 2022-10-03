import React from "react";
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
        <Container className="searchcontainer">
          <Row className="searchrow">
            <div
              className="col-1"
              style={{
                background: "lightgrey",
                borderRadius: "10px",
                width: "150px",
                padding: "4px 9px 0",
                
              }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                color:"#008cff"}}>TRIP TYPE</h5>
              <Dropdown style={{ width: "8px" }}>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <span style={{fontSize:"16px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontWeight:"500"}}>SELECT</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => alert("hhhh")}>
                    ONE WAY
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    ROUND TRIP
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    MULTI CITY
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="col-2"
              style={{ background: "lightgrey", borderRadius: "10px" }}
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
              style={{ background: "lightgrey", borderRadius: "10px" }}
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
              style={{ background: "lightgrey", borderRadius: "10px" }}
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
              style={{ background: "lightgrey", borderRadius: "10px" }}
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
              style={{ background: "lightgrey", borderRadius: "10px" }}
            >
              <h5 style={{fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                marginTop:"5px",
                color:"#008cff"}}>PASSENGERS&CLASS</h5>
                <span className="searchstart">1Adult,Economy</span>

            </div>
            
          </Row>
          <Row  style={{top:"2.5rem",position:"relative",background:"rgb(10, 10, 42)"}}>
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
                  Fares <span className="new">NEW</span>
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
        </Container>
      </div>
      {/* <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsitem">
              <label htmlFor="">Destination</label>
              <input placeholder="" type="text" />
            </div>
            <div className="lsitem">
              
            </div>
            <div className="lsitem">
              <label>Options</label>

              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder=""
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder=""
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder="hey"
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default Search;
