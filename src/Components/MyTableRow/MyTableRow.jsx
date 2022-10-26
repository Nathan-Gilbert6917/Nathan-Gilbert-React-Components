import React from "react";

import "./MyTableRow.css";

const MyTableRow = ({ data, customClass }) => {
  return (
    <tr className={customClass}>
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
};

export default MyTableRow;
