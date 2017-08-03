import React from 'react';
import FilterItem from '../FilterItem/FilterItem'
import SearchItem from '../SearchItem/SearchItem'
import SortItem from '../SortItem/SortItem'

const FiltersList = ({ posts, users, onFilterChange, onSearch, onSort }) => {
  const companies = users.map(({id, company: {name}}) => ({value: id, text: name}));
  const cities = users
    .map(({id, address: {city}}) => ({value: id, text: city}))
    .filter((value, index, self) => self.indexOf(value) === index);
  const sortOptions = [
    {value: "authorName", text: "Author name"},
    {value: "company", text: "City name"},
    {value: "city", text: "Company name"}
  ];

  return (
    <div>
      <nav>
        <FilterItem name="Company" options={companies} onChange={onFilterChange} />
        <FilterItem name="City" options={cities} onChange={onFilterChange}/>
        <SearchItem name="title" onChange={onSearch} />
        <SortItem options={sortOptions} onChange={onSort} />
      </nav>
    </div>
  );
};

export default FiltersList;
