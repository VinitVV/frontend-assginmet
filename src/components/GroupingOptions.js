import React from 'react';

function GroupingOptions({ groupBy, setGroupBy }) {
  return (
    <div className="dropdown-section">
      <h3>Grouping</h3> 
      <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
        
        {/* Dropdown select element for choosing the grouping */}

        {/* Group by ticket status */}
        <option value="status">Status</option> 
       
        {/* Group by user */}
        <option value="user">User</option> 
      </select>
    </div>
  );
}

export default GroupingOptions;
