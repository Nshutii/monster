import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (

  <input type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
  // onChange={handleChange =>
  //   this.setState({ searchField: e.target.value })}
  />
)