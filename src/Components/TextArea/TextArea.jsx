import React from "react";
import "./TextArea.css";

const TextArea = ({ label, type, placeholder, name, required }) => {
  return (
    <div className="textarea-container">
      <div className="textarea-inner">
        <textarea
          className="textarea-field"
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
        />
        <label className="textarea-label" for={name}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default TextArea;
