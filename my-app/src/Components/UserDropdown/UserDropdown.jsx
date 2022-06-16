import React, { useState } from 'react';

import './UserDropdown.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';

const UserDropdown = () => {

  const [expanded, setExpanded] = useState(false);

  const toggle =()=> {
    setExpanded(!expanded);
  }

  const close =()=> {
    setExpanded(false);
    

  }

  const activeClass = expanded ? 'user-dropdown-content-container active' : 'user-dropdown-content-container';

  return (
    <div>
      <OutsideAlerter handleClick={() => close()}>
        <div className="user-dropdown-container" onClick={() => toggle()}>
          <img alt="User Icon" className="image" src="https://drive.google.com/uc?id=1u5yg5aRgCDXutshbXAhbZMxMQWx7XXNG"/>
          <div className="user-dropdown-icon">
            {<FontAwesomeIcon icon={solid('chevron-down')} />}
          </div>
        </div>
        <div className={activeClass} ></div>
      </OutsideAlerter>
      
    </div>
    
  )
}

export default UserDropdown;