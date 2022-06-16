import React from 'react';
import './Input.css';

const Input = ({label, type, placeholder, name, isHorizontal, required}) => {
  
  let inputClass = isHorizontal ? 'input-container horizontal' : 'input-container';

  return (
    <div className={inputClass}>
      <label for={name}>{label}</label>
      <input
        className="input-field"
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default Input;