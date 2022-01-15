import React from "react";

import importIcons from "./assets/images/upload-file-img.png";
import { Container ,Row,Col} from "react-bootstrap";
import { HeaderText } from "./components";

const Traymangment = () => {
  return (
    <>
      <Container className="bg-light ">
        <HeaderText color="bg-white" text="Tray Management" />
        <Container className="justify-content-center flex-column ">
          <Row className="mt-5">
            <Col lg={3}></Col>
            <Col lg={9}>
              <h4 className="fw-italic">
                You don’t have any tray information please upload data
              </h4>
              <img src={importIcons} />
              <h4 className="px-4">Upload Excel and CSV files only</h4>
              <h6 className="px-5">you can simply drag and drop files here</h6>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default Traymangment;
