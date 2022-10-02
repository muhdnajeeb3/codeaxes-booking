import React from "react";
import "./OfferSection.css";
import Card from "react-bootstrap/Card";
import { Button, Container, Row } from "react-bootstrap";

import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

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
  let navigate = useNavigate();
  const INDIGOHANDLER = () => {
    navigate("/hotels");
  };
  const SEOSONOFFERHANDLER = () => {
    navigate('/seosonoffers')
  }
  return (
    <div className="OfferSection">
      <Container>
        <Row className="carosel">
          <Row className="carosel1">
            <h2>Offers</h2>{" "}
            <Button variant="" className="btnofferflight">
              <h4 className="btnofferflighttext">FLIGHTS</h4>
            </Button>
          </Row>
          <Row>
            <div>
              <Slider {...settings} className="sliderrow">
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://promos.makemytrip.com/notification/xhdpi//indigo-116x116-08072022.jpg"
                      className="img"
                    />
                    <Card.Body>
                      <h5>FASTEN YOUR SEAT BELTS: New Flights by Indigo</h5>
                      <Card.Text className="cardtext">
                        NOW flying between Dhaka & Bengaluru!.
                      </Card.Text>
                      <Row
                        style={{ width: "8rem", top: "2.7rem" }}
                        className="booknowrow"
                      >
                        <Button
                          variant=""
                          className="booknowbtn"
                          onClick={INDIGOHANDLER}
                        >
                          Book Now
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "0rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://promos.makemytrip.com/notification/xhdpi//116x116-AirArabia-19092022.jpg"
                      className="img"
                    />
                    <Card.Body>
                      {/* <h6>DOM FLIGHTS</h6> */}
                      {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                      <h5>Power-Packed Deals on Air Arabia's Flights!</h5>
                      <Card.Text className="cardtext">
                        Now enjoy special fares on flights to select routes..
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        <Button variant="" className="booknowbtn">
                          Book Now
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://promos.makemytrip.com/notification/xhdpi//116x116-ExtraBaggage-05092022.jpg"
                      className="img"
                    />
                    <Card.Body>
                      {/* <h6>DOM FLIGHTS</h6> */}
                      {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                      <h5>Carry Extra Baggage @20%* Lower Prices!</h5>
                      <Card.Text className="cardtext">
                        Now purchase EXCESS BAGGAGE allowance in advance & save
                        BIG bucks on your journey.
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        <Button variant="" className="booknowbtn">
                          Book Now
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://promos.makemytrip.com/notification/xhdpi//AncillaryMeals-01092022.jpg"
                      className="img"
                    />
                    <Card.Body>
                      {/* <h6>DOM FLIGHTS</h6> */}
                      {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                      <h5>Meals for Your Flights @ uo to 20% Lower Prices!</h5>
                      <Card.Text className="cardtext">
                        Now book your meal in advance & save BIG bucks on your
                        journey.
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        <Button variant="" className="booknowbtn">
                          Book Now
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://promos.makemytrip.com/notification/xhdpi//mobikwik011022.jpeg"
                      className="img"
                    />
                    <Card.Body>
                      {/* <Card.Title>DOM FLIGHTS</Card.Title> */}
                      <h5>It's the Seoson of #DiscountDEALLights!</h5>
                      <Card.Text className="cardtext">
                        Pay with Mobikwik & grab up to Rs. 600 OFF* on
                        Domesticflights,hotels,bus booking.
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        {" "}
                        <Button variant="" className="booknowbtn" onClick={SEOSONOFFERHANDLER}>
                          {" "}
                          View Details
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://promos.makemytrip.com/notification/xhdpi//116X116-if-thailand-27092022.jpg"
                      className="img"
                    />
                    <Card.Body>
                      <h5>Travel Restrictions Eased for Thailand!</h5>
                      <Card.Text className="cardtext">
                        Now explore Thailand without worrying about
                        rapid-antigen test.Thailand pass or travel insurance. .
                      </Card.Text>
                      <Row
                        style={{ width: "8rem", bottom: "31rem" }}
                        className="booknowrow"
                      >
                        <Button variant="" className="booknowbtn">
                          Book Now
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://promos.makemytrip.com/notification/xhdpi//health-professionals-116x116-06092022.jpg"
                      className="img"
                    />
                    <Card.Body>
                      <h5>
                        INTRODUCED: Special Fares for Healthcare Profession...
                      </h5>
                      <Card.Text className="cardtext">
                        + ADDITIONAL up to Rs.2000 OFF* on domestic flights!.
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        <Button variant="" className="booknowbtn">
                          Book Now
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://promos.makemytrip.com/notification/xhdpi//116X116-jazeera-26092022.jpg"
                      className="img"
                    />
                    <Card.Body>
                      <h5>Jazeera Airlines Introduces New Flights</h5>
                      <Card.Text className="cardtext">
                        From/to Kuwait,Thiruvananthapuram and Bengaluru!.
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        <Button variant="" className="booknowbtn">
                          Book Now
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://promos.makemytrip.com/notification/xhdpi//116X116-MMT-Group-230522.jpg"
                      className="img"
                    />
                    <Card.Body>
                      <h5>
                        For You: Group Booking Benefits on Flights FLIGHTS
                      </h5>

                      <Card.Text className="cardtext">
                        in india! Book 9+flights tickets together & save more..
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        <Button variant="" className="booknowbtn">
                          View Details
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://promos.makemytrip.com/notification/xhdpi//Flash_Sale_Flights.jpg"
                      className="img"
                    />
                    <Card.Body>
                      <h5>Introducing Price Lock on Domestic Flights</h5>
                      <Card.Text className="cardtext">
                        Lock domestic flights fares @JUST Rs.99 & book later.
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        <Button variant="" className="booknowbtn">
                          View Details
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://promos.makemytrip.com/notification/xhdpi//Flights-insurance-116x116.jpg"
                      className="img"
                    />
                    <Card.Body>
                      <h5>Get Your Journey Insured @ JUST RS.79*</h5>
                      <Card.Text className="cardtext">
                        and get claim of up to Rs.3000*.
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        <Button variant="" className="booknowbtn">
                          View Details
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg"
                      className="img"
                    />
                    <Card.Body>
                      <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                      <Card.Text>
                        with Our Flight Sale Live till December.
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        <Button variant="" className="booknowbtn">
                          Book Now
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg"
                      className="img"
                    />
                    <Card.Body>
                      <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                      <Card.Text>
                        with Our Flight Sale Live till December.
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        <Button variant="" className="booknowbtn">
                          Book Now
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      width: "30rem",
                      height: "13rem",
                      marginLeft: "2rem",
                    }}
                    className="cards"
                  >
                    <Card.Img
                      variant="top"
                      src="https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel_square.jpg"
                      className="img"
                    />
                    <Card.Body>
                      <h5>FOR YOU: Up to 35% OFF* on Domestic Flights</h5>
                      <Card.Text>
                        with Our Flight Sale Live till December.
                      </Card.Text>
                      <Row style={{ width: "8rem" }} className="booknowrow">
                        <Button variant="" className="booknowbtn">
                          Book Now
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </Slider>
            </div>
          </Row>
        </Row>
      </Container>
      <Row className="aboutthispage">
        <Row>
          <h2 className="aboutheading">PRODUCT OFFERING</h2>
        </Row>
        <Row>
          <p className="abouttext">
            Flights,International Flights,Charter Flights
          </p>
        </Row>
        <Row>
          <h2 className="aboutheading">MY TRIP</h2>
        </Row>
        <Row>
          <p className="abouttext">
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Row>
        <Row>
          <h2 className="aboutheading">ABOUT THE SITE</h2>
        </Row>
        <Row>
          <p className="abouttext">
            Customer Support,Payment Security,Privary Policy,User
            Agreement,Terms of Service,More Offices,Make A Payment,Work From
            Home
          </p>
        </Row>
        <Row>
          <h2 className="aboutheading">QUICK LINKS</h2>
        </Row>
        <Row>
          <p className="abouttext">
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Row>
        <Row>
          <h2 className="aboutheading">IMPORTANT LINKS</h2>
        </Row>
        <Row>
          <p className="abouttext">
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Row>
        <Row>
          <h2 className="aboutheading">CORPORATE TRAVEL</h2>
        </Row>
        <Row>
          <p className="abouttext">
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Row>
      </Row>
    </div>
  );
}

export default OfferSection;
