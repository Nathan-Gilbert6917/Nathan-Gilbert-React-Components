import React from "react";

import MyTableRow from "../MyTableRow/MyTableRow";
import "./MyTable.css";

const MyTable = ({
  headers,
  data,
  customClass,
  headerClass,
  bodyClass,
  cellClass,
  isRounded,
  horizontalLines,
  verticalLines,
  headerLines,
}) => {
  customClass = customClass
    ? customClass
    : isRounded
    ? "rounded-table"
    : "boxy-table";

  const headerLineClass = headerLines ? "header-inner-lines" : "";

  const bodyLineClass = () => {
    if (horizontalLines & verticalLines)
      return "tbody-vertical-lines tbody-horizontal-lines";

    if (verticalLines) return "tbody-vertical-lines";

    if (horizontalLines) return "tbody-horizontal-lines";
  };

  return (
    <table className={customClass}>
      <thead className={headerLineClass}>
        <MyTableRow data={headers} customClass={headerClass} />
      </thead>
      <tbody className={bodyLineClass()}>
        {data.map((item) => {
          return (
            <MyTableRow
              key={item.id}
              data={item.items}
              customClass={bodyClass}
              customCellClass={cellClass}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;
