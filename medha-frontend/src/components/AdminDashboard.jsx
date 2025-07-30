import React, { useState } from 'react';

const AdminDashboard = () => {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [maxTeamSize, setMaxTeamSize] = useState('');


  const handleAddEvent = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: eventName,
          description,
          venue,
          date,
          time,
          maxTeamSize,
        }),
      });

      if (response.ok) {
        alert('✅ Event added successfully');
        setEventName('');
        setDescription('');
        setVenue('');
        setDate('');
        setTime('');
        setMaxTeamSize('');
        // No need to fetch events here
      } else {
        alert('❌ Failed to add event');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Server error');
    }
  };

  return (
    <div className="admin-dashboard-container" style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '32px',
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
      border: '1px solid #e5e7eb',
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '24px',
        textAlign: 'center',
        color: '#1a202c',
        letterSpacing: '0.5px',
      }}>Admin Dashboard</h2>
      <form
        onSubmit={e => { e.preventDefault(); handleAddEvent(); }}
        style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label htmlFor="eventName" style={{ fontWeight: 500 }}>Event Name:</label>
          <input
            id="eventName"
            className="input"
            value={eventName}
            onChange={e => setEventName(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
            }}
            required
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label htmlFor="description" style={{ fontWeight: 500 }}>Description:</label>
          <textarea
            id="description"
            className="input"
            value={description}
            onChange={e => setDescription(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
              minHeight: '60px',
              resize: 'vertical',
            }}
            required
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label htmlFor="venue" style={{ fontWeight: 500 }}>Venue:</label>
          <input
            id="venue"
            className="input"
            value={venue}
            onChange={e => setVenue(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
            }}
            required
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label htmlFor="date" style={{ fontWeight: 500 }}>Date:</label>
          <input
            id="date"
            className="input"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
            }}
            required
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label htmlFor="time" style={{ fontWeight: 500 }}>Time:</label>
          <input
            id="time"
            className="input"
            value={time}
            onChange={e => setTime(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
            }}
            required
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label htmlFor="maxTeamSize" style={{ fontWeight: 500 }}>Max Team Size:</label>
          <input
            id="maxTeamSize"
            className="input"
            type="number"
            value={maxTeamSize}
            onChange={e => setMaxTeamSize(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
              width: '100%',
            }}
            min={1}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 0',
            marginTop: '10px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(99,102,241,0.10)',
            transition: 'background 0.2s',
          }}
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
