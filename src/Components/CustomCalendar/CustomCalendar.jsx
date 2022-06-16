import React from 'react'

import Calendar from 'react-calendar';

// Styling for the react-calendar component
import 'react-calendar/dist/Calendar.css';

import './CustomCalendar.css';

const CustomCalendar = ({date, handleOnChange}) => {

  return (
    <div className="calendar-container">
      <Calendar onChange={handleOnChange} value={date} />
    </div>
  )
}

export default CustomCalendar;
