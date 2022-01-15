import React from "react";
import backArrow from "./assets/images/svg/back-arrow-icon.svg";
import plusButton from "./assets/images/svg/plus-white-icon-lg.svg";
import hospitalImage from "./assets/images/hospital-img.png";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Bell } from "react-bootstrap-icons";

import {
  Button,
  Col,
  Container,
  Dropdown,
  Row,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const AssignTray = () => {
  return (
    <>
      {/* <ProSidebar className='bg-white'>
        <Menu iconShape="square">
          <MenuItem icon={<Bell />}>Dashboard</MenuItem>
          <MenuItem icon={<Bell />}>Dashboard</MenuItem>
          <MenuItem icon={<Bell />}>Dashboard</MenuItem>
          <MenuItem icon={<Bell />}>Dashboard</MenuItem>
          <MenuItem icon={<Bell />}>Dashboard</MenuItem>
          <MenuItem icon={<Bell />}>Dashboard</MenuItem>
          <MenuItem icon={<Bell />}>Dashboard</MenuItem>
        </Menu>
      </ProSidebar> */}
      ;
      <Container className="bg-light container-fluid vh-100">
        <Container className="bg-white my-3">
          <Row>
            <Col lg={6}>
              <Col>
                <Row className="mt-0" style={{ width: "14%", heigth: "14%" }}>
                  <img className="mt-0 " src={hospitalImage} />
                </Row>
                <Col className="mx-5 " style={{ marginTop: -32 }}>
                  <h5 className="header_text">Houston Methodist Hospital</h5>
                  <p className="sub_header_text">
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </p>
                </Col>
              </Col>
            </Col>
            <Col lg={6} className="d-flex  flex-row-reverse ">
              <h6 className="pt-3">james james</h6>
              <img className=" mx-2 rounded-circle" src={hospitalImage} />
              <Bell className="mx-4" size={35} />
            </Col>
          </Row>
        </Container>
        <Container className="col py-3 px-md bg-white ">
          <Row className="justify-content-md-center mt-8">
            <Col>
              <h3>
                <img className="mx-4" src={backArrow} />
                Assign Tray
              </h3>
            </Col>
            <Col xs lg="2" className="justify-content-md-end">
              <Dropdown>
                <Button variant="success">
                  <img src={plusButton} />
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Add Tray
                  </Dropdown.Toggle>
                </Button>

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
          </Row>
        </Container>
        <Container className="bg-white mt-4" style={{ height: "280px" }}>
          <Form>
            <Row className="justify-content-md-center">
              <Col lg={3}>
                <Form.Label className="bold">Select service line</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select option</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col lg={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Select Tray</Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
        <div className="footer-copyright text-start py-3 bg-white mt-3">
          © 2021 Pegasys.
        </div>
      </Container>
    </>
  );
};
export default AssignTray;
