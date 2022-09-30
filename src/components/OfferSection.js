import React from "react";
import "./OfferSection.css";
import Card from "react-bootstrap/Card";
import { Button, Container, Row } from "react-bootstrap";

import Slider from "react-slick";

function OfferSection() {
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 600,
    rows: 1,
    // slidesPerRow: 2,
    
  };
  return (
    <div className="OfferSection">
      <Container>
        <Row className="carosel">
          <Row className="carosel1">
            <h2>Offers</h2> <Button variant="" className="btnofferflight"><h4 className="btnofferflighttext">FLIGHTS</h4></Button>
          </Row>
          <Row >
          <div>
            
            <Slider {...settings} className="sliderrow">
              <div>
                <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
              <Card style={{ width: "35rem",height:"16rem",marginLeft:"2rem" }} className="cards">
                  <Card.Img variant="top" src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg" className="img"/>
                  <Card.Body>
                    <h6>DOM FLIGHTS</h6>
                    {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                    <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                    <Card.Text>
                      with Our Flight Sale Live till December.
                    </Card.Text>
                    <Button variant="info">Book Now</Button>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </div>
          </Row >

          
        </Row>
      </Container>
      <Row className="aboutthispage">
        <Row>
            <h2 className="aboutheading">PRODUCT OFFERING</h2>
        </Row>
        <Row>
            <h6 className="abouttext">Flights,International Flights,Charter Flights</h6>
        </Row>
        <Row>
            <h2 className="aboutheading">MY TRIP</h2>
        </Row>
        <Row>
            <h6 className="abouttext">Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
        </Row>
        <Row>
            <h2 className="aboutheading">ABOUT THE SITE</h2>
        </Row>
        <Row>
            <h6 className="abouttext">Customer Support,Payment Security,Privary Policy,User Agreement,Terms of Service,More Offices,Make A Payment,Work From Home</h6>
        </Row>
        <Row>
            <h2 className="aboutheading">QUICK LINKS</h2>
        </Row>
        <Row>
            <h6 className="abouttext">Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
        </Row>
        <Row>
            <h2 className="aboutheading">IMPORTANT LINKS</h2>
        </Row>
        <Row>
            <h6 className="abouttext">Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
        </Row>
        <Row>
            <h2 className="aboutheading">CORPORATE TRAVEL</h2>
        </Row>
        <Row>
            <h6 className="abouttext">Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
        </Row> 
        

      </Row>
    </div>
  );
}

export default OfferSection;
