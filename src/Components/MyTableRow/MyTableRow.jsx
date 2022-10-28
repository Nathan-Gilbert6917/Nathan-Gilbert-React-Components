import React from "react";

import "./MyTableRow.css";

const MyTableRow = ({ data, customClass, customCellClass }) => {
  customCellClass = customCellClass ? customCellClass : "default-cell-content";

  return (
    <tr className={customClass}>
      {data.map((item) => {
        return (
          <td className={customCellClass} key={item}>
            {item}
          </td>
        );
      })}
    </tr>
  );
};

export default MyTableRow;
