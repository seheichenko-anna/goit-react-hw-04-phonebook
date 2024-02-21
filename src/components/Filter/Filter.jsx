import React from 'react';
import { SearchInput, SearchWrapper } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <SearchWrapper>
      {' '}
      Find contacs by name
      <SearchInput type="text" value={value} onChange={onChange} />
    </SearchWrapper>
  );
};

export default Filter;
