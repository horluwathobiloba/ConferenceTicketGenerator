import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TicketSelection from './TicketSelection';
import AttendeeDetails from './AttendeeDetails';
import TicketReady from './TicketReady';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TicketSelection />} />
      <Route path="/AttendeeDetails" element={<AttendeeDetails ticketType="free" />} />
      <Route path="/TicketReady" element={<TicketReady />} />
    </Routes>
  );
}

export default App;