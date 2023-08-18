import React from 'react';
import './Card.css'; 
function Card({ ticket }) {
  return (
    <div className="card">
      
      {/* Displaying the user ID */}
      <p>{ticket.userId}</p> 
      
      {/* Displaying the ticket title */}
      <h3>{ticket.title}</h3> 
      
      {/* Displaying the ticket status */}
      <p>Status: {ticket.status}</p> 
      
      {/* Displaying the ticket priority */}
      <p>Priority: {ticket.priority}</p> 
    </div>
  );
}

export default Card;
