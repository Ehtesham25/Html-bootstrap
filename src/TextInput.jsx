import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import "./Textinputstyle.css";

const TextInput = (props) => {
  const { type, iconType, placeholder } = props;
  return (
    <>
      <Container
        style={{
          borderColor: "grey",
          borderTopColor: "grey",
          borderRightColor: "grey",
          borderBottomColor: "grey",
          borderLeftColor: "grey",
          borderRadius: 5,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          borderStyle: "solid",
          borderWidth: 1,
          borderTopWidth: 1,
          borderRightWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          height: "10vh",
          display: "flex",
          flexDirection: "row",
          width: "35vw",
        }}
      >
        <Row>
          <Col lg={1} className="mt-3">
            <span>
              <img src={iconType} />
            </span>
          </Col>
          <Col lg={1} className="mx-0">
            <div
              style={{
                height: 22,
                width: 0.1,
                backgroundColor: "grey",
                marginTop: 19,
                marginLeft: 9,
              }}
            ></div>
          </Col>

          <Col>
            <input
              placeholder={placeholder}
              type={type}
              style={{
                border: "none",
                paddingLeft: 6,
                outline: "none",
                height: "9vh",
                width: "21vw",
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TextInput;
