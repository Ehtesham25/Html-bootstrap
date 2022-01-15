import React from "react";
import { Container } from "react-bootstrap";
import errorIcon from "./assets/images/svg/form-error-icon.svg";

import "./WellcomeStyle.css";

const WelcomeText = (props) => {
  return (
    <>
      <h4 style={{ marginLeft: "4rem" }} className=" welcome_text">
        {props?.welcome}
      </h4>
      <Container style={{ marginLeft: "2.4rem", marginTop: -9 }}>
        <h2 className="claim_profile_style">{props?.claimprofile}</h2>
      </Container>

      <div
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
        }}
        className="input-holder2 mt-5 "
      >
        <span className="icon-holder">
          <img
            src={errorIcon}
            alt=""
            style={{ position: "absolute" }}
            className="mt-3 px-3"
          />
        </span>

        <h5
          style={{
            fontSize: "0.8rem",
            fontWeight: "bold",
            paddingTop: 10,
            marginLeft: 12,
          }}
          className="basic-font px-5"
        >
          Account not found
        </h5>
        <p
          className=" basic-font px-5"
          style={{ marginLeft: 12, marginTop: -9 }}
        >
          Your invitation has expired. Please{" "}
          <a href="#" style={{ color: "#8E878A", fontWeight: "540" }}>
            contact support
          </a>
          .
        </p>
      </div>
    </>
  );
};
export default WelcomeText;
