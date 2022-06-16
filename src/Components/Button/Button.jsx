import React from 'react';
import './Button.css';

const Button = ({label, icon, isCircular, isInverted, showShadow, disabled, handleClick}) => {
    
  let buttonClass = isCircular ? "button circular" : "button";

  if (isInverted) {
    buttonClass += " invert";
  }

  if (showShadow) {
    buttonClass += " shadow";
  }

  return (
    <button onClick={handleClick} className={buttonClass} disabled={disabled}>
      <span className="button-icon">{icon}</span>
      <span className="button-label">{label}</span>
    </button>
  )
}

export default Button;