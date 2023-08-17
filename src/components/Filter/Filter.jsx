import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilters, updateFilter } from 'redux/filterSlice';



const Filter = () => {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };
  return (
    <label>
      Filter contacts by name:
      <input type="text" value={filter} onChange={handleFilterChange} />
    </label>
  );
};

export default Filter;
