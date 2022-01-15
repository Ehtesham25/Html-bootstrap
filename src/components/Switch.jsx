import React from "react";

const Switch = (props) => {
  const { text, value } = props;
  return (
    <>
      <input
        className="form-check-input "
        type="checkbox"
        id="flexSwitchCheckChecked"
        checked={value}
      />
      <label className="form-check-label" for="flexSwitchCheckChecked">
        {text}
      </label>
    </>
  );
};

export default Switch;
