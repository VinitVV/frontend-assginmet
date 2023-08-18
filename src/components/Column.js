import React from 'react';
import Card from './Card';
import './Column.css';

function Column({ groupKey, tickets }) {
  // Log groupKey and tickets to the console for debugging
  console.log('Group Key:', groupKey);
  console.log('Tickets:', tickets);

  // Icons representing different priority levels
  const priorityIcons = {
    4: 'fas fa-exclamation-triangle',
    3: 'fas fa-arrow-up',
    2: 'fas fa-arrow-right',
    1: 'fas fa-arrow-down',
    0: 'fas fa-minus',
  };

  // Labels for priority levels
  const priorityLabels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No Priority',
  };

  // Count of cards in the column
  const cardCount = tickets.length;

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-icon">
          {/* Displaying user icon or priority icon based on groupKey */}
          {groupKey === 'user' ? (
            <i className="fas fa-user" />
          ) : (
            <i className={priorityIcons[groupKey]} />
          )}
        </div>
        <div className="column-title">
          {/* Displaying user name or priority label based on groupKey */}
          {groupKey === 'user' && tickets.length > 0
            ? 'User: ' + tickets[0].user.name
            : groupKey === 'user'
              ? 'User: ' + groupKey
              : priorityLabels[groupKey]}
        </div>
        {/* Displaying card count for priority columns */}
        {groupKey !== 'user' && (
          <div className="priority-count">
            {cardCount} {cardCount !== 1 ? 'cards' : 'card'}
          </div>
        )}
        <div className="add-task-button">
          <i className="fa fa-plus" />
        </div>
        
        <div className="column-options">
          <i className="fa fa-ellipsis-h" />
        </div>
      </div>
      {/* Render cards inside the column */}
      <div className="cards">
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default Column;
