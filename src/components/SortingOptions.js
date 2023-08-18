import React from 'react';

function SortingOptions({ sortBy, setSortBy }) {
  return (
    <div className="dropdown-section">
      <h3>Ordering</h3> 
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        {/* Dropdown options for sorting */}
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortingOptions;
