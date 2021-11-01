import React from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const {currentPage, maxPages, onPageChange} = props;

  return (
    <div className="pagination" onClick={onPageChange}>
      {Array(maxPages).fill(null).map((_, index) => {
        return <button key={index} className="pagination__button" disabled={currentPage === index + 1}>{index + 1}</button>;
      })}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;