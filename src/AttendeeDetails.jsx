// AttendeeDetails.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AttendeeDetails.css';
import cloudIcon from './assets/cloud-download.svg'

const AttendeeDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ticketType = location.state?.ticketType;

  const [formData, setFormData] = useState({ name: '', email: '', request: '', photo: null });
  const [hover, setHover] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.photo) {
      alert('Please upload an image before proceeding.');
      return;
    }
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    navigate('/ticketready');
  };

  return (
    <div className="attendee-details">
      <h2>Attendee Details</h2>
      <div 
        className="upload-box"
        onClick={() => document.getElementById('photo-upload').click()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(formData.photo !== null)}
      >
        {formData.photo ? (
          <img src={formData.photo} alt="Uploaded Profile" className="uploaded-image" />
        ) : (
          <div className="upload-placeholder">
            <img src={cloudIcon} alt="Upload Icon" className="upload-icon" />
            <p>Drag & drop or click anywhere to upload</p>
          </div>
        )}
        {hover && (
          <div className="hover-overlay">Click to Change Photo</div>
        )}
        <input
          type="file"
          id="photo-upload"
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="request"
          placeholder="Special request?"
          value={formData.request}
          onChange={handleChange}
        />
        <div className="form-buttons">
          <button type="button" className="back-button" onClick={() => navigate('/')}>Back</button>
          <button type="submit" className="submit-button">
            {ticketType?.toLowerCase() === 'free' ? 'Get My Free Ticket' : 'Get My Ticket'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;