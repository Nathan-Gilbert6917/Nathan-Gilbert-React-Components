import React from "react";
import "./Input.css";

const Input = ({ label, type, value, name, onChange }) => {
  if (!type) type = "text";
  if (!label) label = "";
  return (
    <div className="text-input-box">
      <div className="text-input-inner">
        <input
          className="input-field"
          type={type}
          name={name}
          value={value}
          required
          onChange={(e) => onChange(e)}
        />
        <label className="input-label">{label}</label>
      </div>
    </div>
  );
};

export default Input;
