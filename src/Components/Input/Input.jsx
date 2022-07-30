import React from "react";
import "./Input.css";

const Input = ({ label, type }) => {
  if (!type) type = "text";
  if (!label) label = "";
  return (
    <div className="text-input-box">
      <div className="text-input-inner">
        <input className="input-field" type={type} name="" required />
        <label className="input-label">{label}</label>
      </div>
    </div>
  );
};

export default Input;
