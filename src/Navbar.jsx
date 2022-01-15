import React, { useState } from "react";
import { Col, Container, Row, Dropdown, ToastContainer } from "react-bootstrap";
import { Bell } from "react-bootstrap-icons";

import HeaderIcon from "./assets/images/svg/sidebar-icon.svg";
import hospitalImage from "./assets/images/hospital-img.png";
import Home from "./Home";

const Navbar = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <Container>
        <Row>
          <Col lg={2} className="mt-3">
            <h2 className="fw-bold">PageSays</h2>
            {state && (
              <Container className="d-flex flex-column">
                <Row
                  style={{
                    position: "absolute",
                    top: 100,
                    left: 2,
                    width: 290,
                    height: 430,
                  }}
                >
                  <h5>DashBoard</h5>
                  <h5>Current Tracking</h5>
                  <h5>General Statics </h5>
                  <h5>Schudal Data</h5>
                </Row>
              </Container>
            )}
          </Col>
          <Col lg={8}>
            <Col>
              <img
                src={HeaderIcon}
                onClick={() => setState(!state)}
                className="pt-2"
              />
              <Row
                className="pt-0 px-3"
                style={{ width: "14%", heigth: "14%" }}
              >
                <img className="mt-0 " src={hospitalImage} />
              </Row>
              <Col className="mx-5 ">
                <h5 className="header_text">Houston Methodist Hospital</h5>
                <p className="sub_header_text">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="white"
                    id="dropdown-basic"
                    style={{ marginTop: -79, marginLeft: 269 }}
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Col>
          </Col>
          <Col lg={2} className="mt-3 d-flex  ">
            <Bell size={23} className="mx-2" />
            <div
              style={{
                height: 22,
                width: 0.1,
                backgroundColor: "grey",
              }}
              className="mx-4"
            ></div>
            <h5 className="">John </h5>
          </Col>
        </Row>
      </Container>
      <ToastContainer>
        <Row>
          <Col lg={2}></Col>
          <Col lg={10}>
            <Home />
          </Col>
        </Row>
      </ToastContainer>
    </>
  );
};

export default Navbar;
