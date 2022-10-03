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
        </Container>
      </div>
      <div className="searchsec">
        
      </div>

    </div>
  );
}

export default Search;
