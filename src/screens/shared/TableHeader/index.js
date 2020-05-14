import React from "react";
import PropTypes from "prop-types";

function TableHeader({ columnsNames, sortTable, order }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th key={c} onClick={() => (
            sortTable(c, order)
          )}>{c}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;

TableHeader.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired
};
