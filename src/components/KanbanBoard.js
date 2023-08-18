import React, { useState, useEffect } from 'react';
import './KanbanBoard.css';
import Column from './Column';
import Navbar from './Navbar';

function KanbanBoard() {
  // State to store the fetched tickets data
  const [tickets, setTickets] = useState([]);
  // State for grouping and sorting options
  const [groupBy, setGroupBy] = useState('priority');
  const [sortBy, setSortBy] = useState('priority');

  // Fetch and set tickets data when the component loads
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Group and sort the fetched tickets based on current grouping and sorting options
  const groupedAndSortedTickets = (() => {
    const groupedTickets = {};

    // Group tickets based on selected grouping option
    tickets.forEach((ticket) => {
      const groupKey = groupBy === 'user' ? ticket.userId : ticket[groupBy];
      if (!groupedTickets[groupKey]) {
        groupedTickets[groupKey] = [];
      }
      groupedTickets[groupKey].push(ticket);
    });

    // Sort groups based on selected sorting option
    for (const groupKey in groupedTickets) {
      groupedTickets[groupKey].sort((a, b) => {
        if (sortBy === 'priority') {
          return b.priority - a.priority;
        } else if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    }

    return groupedTickets;
  })();

  return (
    <div className="kanban-board">
      {/* Navbar component for choosing grouping and sorting options */}
      <Navbar
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className="columns">
        {/* Generate columns based on grouped and sorted tickets */}
        {Object.entries(groupedAndSortedTickets).map(([groupKey, groupTickets]) => (
          <Column key={groupKey} groupKey={groupKey} tickets={groupTickets} />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
