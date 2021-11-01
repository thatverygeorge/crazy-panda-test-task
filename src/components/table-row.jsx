import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const {item} = props;

  return (
    <tr className="table__row">
      {Object.values(item).map((value) => {
        return (
          <td key={value} className="table__cell">
            <p>{value}</p>
          </td>
        )
      })}
    </tr>
  );
};

TableRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TableRow;