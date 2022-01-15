import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeaderText = (props) => {
  const { text, icons, color } = props;
  return (
    <>
      <Container className={`col py-3 my-3  px-md ${color}`}>
        <Row className="justify-content-md-center mt-8">
          <Col>
            <h3 className="fs-3">
              <img src={icons} className="mx-2" /> {text}
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeaderText;
