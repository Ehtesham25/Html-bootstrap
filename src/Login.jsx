import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

import TextInput from "./TextInput";
import WellcomeText from "./WellcomeText";
import loginImage from "./assets/images/login-page-main-img.jpg";
import emailIcon from "./assets/images/svg/email-icon.svg";
import passwordIcon from "./assets/images/svg/lock-icon.svg";

const Login = () => {
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col lg={7}>
            <img className="login_image" src={loginImage} />
          </Col>
          <Col lg={5}>
            <Container className="justify-content-md-center mt-5">
              <WellcomeText
                welcome="Welcome to"
                claimprofile="Claim Your profile"
              />

              <Form.Label className="form_text">Email address</Form.Label>
              <TextInput
                placeholder="Enter Email"
                type="email"
                iconType={emailIcon}
              />

              <Form.Label className="form_text">Password</Form.Label>
              <TextInput
                placeholder="Enter Password"
                type="password"
                iconType={passwordIcon}
              />

              <p style={{ fontWeight: "450" }} className=" mt-4">
                I accept <a href="#">Terms & Conditions</a> by signing up
              </p>
              <div className="d-grid gap-2 signup_button">
                <Button variant="info" size="lg">
                  <h3 style={{ color: "#ffffff" }}> Sign Up</h3>
                </Button>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
