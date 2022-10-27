import React from "react";

import MyTableRow from "../MyTableRow/MyTableRow";
import "./MyTable.css";

const MyTable = ({
  headers,
  data,
  customClass,
  headerClass,
  bodyClass,
  isRounded,
  noHorizontalLines,
  noVerticalLines,
  noHeaderLines,
}) => {
  customClass = customClass
    ? customClass
    : isRounded
    ? "rounded-table"
    : "boxy-table";

  const headerLineClass = noHeaderLines ? "" : "header-inner-lines";

  const bodyLineClass = () => {
    if (!noHorizontalLines & !noVerticalLines)
      return "tbody-vertical-lines tbody-horizontal-lines";

    if (noHorizontalLines & !noVerticalLines) return "tbody-vertical-lines";

    if (!noHorizontalLines & noVerticalLines) return "tbody-horizontal-lines";
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
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;
