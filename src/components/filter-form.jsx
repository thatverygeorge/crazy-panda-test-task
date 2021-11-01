import React from 'react';
import PropTypes from 'prop-types';

const FilterForm = (props) => {
  const {onFilterInput} = props;

  const handleSumbit = (evt) => {
    evt.preventDefault();
  };

  const handleInput = (evt) => {
    evt.preventDefault();

    onFilterInput(evt.target.value);
  };

  return (
    <form className="form" onSubmit={handleSumbit}>
      <input className="form__input" type="text" name="filter" id="filter" placeholder="Введите текст для поиска" onInput={handleInput} />
    </form>
  );
};

FilterForm.propTypes = {
  onFilterInput: PropTypes.func.isRequired,
};

export default FilterForm;