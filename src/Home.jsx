import React from "react";
import hospitalImage from "./assets/images/hospital-img.png";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import passwordIcon from "./assets/images/svg/lock-icon.svg";
import bellFill from "./assets/images/svg/bell-icon-lg.svg";
import pickerIcon from "./assets/images/svg/camera-icon.svg";

import { Col, Container, Row, Form } from "react-bootstrap";

import { HeaderText, Switch } from "./components";

const Home = () => {
  return (
    <>
      <Container className="bg-light container-fluid vh-200">
        <HeaderText text="My Profile" color="bg-white" />
        <Container className="bg-white mt-0 vh-80">
          <Row>
            <Col lg={4} className="mt-5 px-5  ">
              <img src={hospitalImage} className="rounded-circle" />
              <img
                src={pickerIcon}
                className="mt-5 rounded-circle"
                style={{
                  position: "absolute",
                  marginLeft: -22,
                  backgroundColor: "grey",
                  width: 33,
                  height: 33,
                }}
              />
            </Col>
            <Col lg={8} className="mt-4">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
        <HeaderText text="Password" icons={passwordIcon} color="bg-white" />
        <Container className="my-3">
          <Row className="my-3">
            <Col lg={4}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
            <Col lg={4}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
            <Col lg={4}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Row>
        </Container>
        <HeaderText
          text="Notification Settings."
          icons={bellFill}
          color="bg-white"
        />
        <Container className="my-3">
          <Row>
            <Col lg={4} className="form-check form-switch">
              <Switch value={false} text="Send me system notifications" />
            </Col>
            <Col lg={4} className="form-check form-switch">
              <Switch value={false} text="When tray reports are ready" />
            </Col>
            <Col lg={4} className="form-check form-switch">
              <Switch value={false} text="When tray reports are ready" />
            </Col>
            <Col lg={4} className="form-check form-switch mt-3">
              <Switch value={false} text="Send me alerts on my mobile" />
            </Col>
            <Col lg={4} className="form-check form-switch mt-3">
              <Switch value={false} text="When report is generated" />
            </Col>
            <Col lg={4} className="form-check form-switch mt-3">
              <Switch value={true} text="When report is generated" />
            </Col>
          </Row>
        </Container>

        <div className="footer-copyright text-start py-3 bg-white mt-3">
          © 2021 Pegasys.
        </div>
      </Container>
    </>
  );
};
export default Home;
