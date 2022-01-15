import React from "react";

import loginImage from "./assets/images/login-page-main-img.jpg";
import "./loginImageStyle.css";

const LoginImage = () => {
  return (
    <>
      <img className="login_image" src={loginImage} />
    </>
  );
};
export default LoginImage;
