import React from 'react';
import './MenuTab.css';

const MenuTab = ({active, label, icon, handleClick}) => {
  
  let tabClass = active ? 'menu-tab-container active' : 'menu-tab-container';
  const renderIcon = () => {
    if (icon) {
      return (
        <div className="menu-tab-icon">
          {icon}
        </div>
      );
    } else {
      return "";
    }
  }
  

  return (  
    <div className={tabClass} onClick={handleClick}>
      <div className="menu-tab-inner-container">
        
        <div className="menu-tab-label">
          {renderIcon()}
          <p>{label}</p>
        </div>
      </div>
      
    </div>
  )
}

export default MenuTab;