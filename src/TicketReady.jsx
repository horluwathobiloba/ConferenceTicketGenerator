import React from 'react';
import './TicketReady.css';

const TicketReady = () => {
    return (
        <div className="ticket-ready-container">
            <nav className="navbar">
                <div className="logo">ticz</div>
                <ul className="nav-links">
                    <li>Events</li>
                    <li>My Tickets</li>
                    <li>About Project</li>
                </ul>
                <button className="my-tickets">MY TICKETS →</button>
            </nav>

            

            <div className="ticket-ready-content">
        
                <h2 className="section-title">Ready</h2>
                <p className="progress-step">Step 3/3</p>
                <div className="progress-bar"></div>


                <h2 className="title">Your Ticket is Booked!</h2>
                <p className="subtitle">Check your email for a copy or you can <span className="download-link">download</span></p>

                <div className="ticket-card">
                    <h3 className="event-name">Techember Fest "25</h3>
                    <p className="event-location">📍 04 Rumens road, Ikoyi, Lagos</p>
                    <p className="event-date">📅 March 15, 2025 | 7:00 PM</p>
                    <div className="ticket-image">
                        <img src="/ticket-image.png" alt="Ticket Holder" />
                    </div>
                    <div className="ticket-info">
                        <div className="info-item"><strong>Name:</strong> Avi Chukwu</div>
                        <div className="info-item"><strong>Email:</strong> user@email.com</div>
                        <div className="info-item"><strong>Ticket Type:</strong> VIP</div>
                        <div className="info-item"><strong>Tickets:</strong> 1</div>
                        <div className="info-item"><strong>Special Request:</strong> Nil or user's message.</div>
                    </div>
                    <div className="barcode">
                        <div className="barcode-lines"></div>
                        <p className="barcode-number">1234567891026</p>
                    </div>
                </div>

                <div className="action-buttons">
                    <button className="book-another">Book Another Ticket</button>
                    <button className="download-ticket">Download Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default TicketReady;
