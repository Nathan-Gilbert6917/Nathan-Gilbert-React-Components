import React from "react";

import MyTableRow from "../MyTableRow/MyTableRow";
import "./MyTable.css";

const MyTable = ({ headers, data, customClass, headerClass, bodyClass }) => {
  return (
    <table className={customClass}>
      <thead>
        <MyTableRow data={headers} customClass={headerClass} />
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <MyTableRow
              key={item.id}
              data={item.items}
              customClass={bodyClass}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;
