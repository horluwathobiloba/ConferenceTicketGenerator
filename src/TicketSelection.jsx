// TicketSelection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import './app.css';
import LogoIcon from './assets/Logo.svg'
import TiczWord from './assets/ticz.png'


function TicketSelection() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState('');
  const navigate = useNavigate();

  const handleTicketSelect = (ticketType) => {
    setSelectedTicket(ticketType);
  };

  const handleNext = () => {
    if (!selectedTicket || !ticketCount) {
      alert('Please select a ticket type and specify the number of tickets.');
      return;
    }
    navigate('/AttendeeDetails', { state: { ticketType: selectedTicket } });
  };

  return (
    <div className="ticket-container">
      <nav className="navbar">

        <div className="logo">
          <img src={LogoIcon} alt="Ticz Logo" className="Ticz-logo" />
          <img src={TiczWord} alt="Ticz Word" className="Ticz-Word" />
        </div>

        <ul className="nav-links">
          <li>Events</li>
          <li>My Tickets</li>
          <li>About Project</li>
        </ul>
        <button className="my-tickets">MY TICKETS →</button>
      </nav>

      <div className="ticket-selection">
        <div className="heade">
          <div className="headee">
            <h2 className="section-title">Ticket Selection</h2>
            <p className="progress-step">Step 1/3</p>
          </div>
          <div className="bar">
            <div className="progress-bar"></div>
          </div>
        </div>

        <div className="container">

          <div className="event-card">
            <h3 className="event-title">Techember Fest '25</h3>
            <p className="event-description">
              Join us for an unforgettable experience at Techember Fest '25! Secure your spot now.
            </p>
            <div className="event-details">
              <span className="event-location">📍 Lagos, Nigeria</span>
              <span className="event-date">March 15, 2025 | 7:00 PM</span>
            </div>
          </div>

          <div className="ticket-options">
            <p className="select-title">Select Ticket Type:</p>
            <div className="ticket-types">
              {['Free', 'VIP', 'VVIP'].map((type) => (
                <div
                  key={type}
                  className={`ticket-type ${selectedTicket === type ? 'active' : ''}`}
                  onClick={() => handleTicketSelect(type)}
                >
                  <h4>{type}</h4>
                  <p>{type === 'Free' ? 'REGULAR ACCESS' : `${type} ACCESS`}</p>
                  <span>20/52</span>
                </div>
              ))}
            </div>

            <label htmlFor="ticket-number">Number of Tickets</label>
            <select
              id="ticket-number"
              value={ticketCount}
              onChange={(e) => setTicketCount(e.target.value)}
            >
              <option value="">Select</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>

            <div className="form-buttons">
              <button className="cancel-btn">Cancel</button>
              < button className="next-btn" onClick={handleNext}>Next</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default TicketSelection;