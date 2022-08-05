import React, { useState } from "react";
import "./Input.css";

import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ label = "", type = "text", value, name, show = true }) => {
  const isText = type === "text";
  const [showPassword, setShowPassword] = useState(show);
  let inputType = showPassword ? "text" : "password";

  const handleShowClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="text-input-box">
      <div className="text-input-inner">
        {type === "password" &&
          (showPassword ? (
            <FontAwesomeIcon
              icon={faEye}
              className="show-password-icon"
              onClick={() => handleShowClick()}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="hide-password-icon"
              onClick={() => handleShowClick()}
            />
          ))}
        <input
          className="input-field"
          type={isText ? "text" : inputType}
          name={name}
          value={value}
          required
        />
        <label className="input-label">{label}</label>
      </div>
    </div>
  );
};

export default Input;
