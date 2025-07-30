import React, { useState, useEffect } from 'react';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [events, setEvents] = useState([]);

  // Fetch events from backend
  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Trigger refresh when an event is added
  const handleEventAdded = () => {
    fetchEvents();
  };

  // Remove duplicate events based on all fields
  const uniqueEvents = events.filter((event, index, self) =>
    index === self.findIndex(e =>
      e.name === event.name &&
      e.description === event.description &&
      e.venue === event.venue &&
      e.date === event.date &&
      e.time === event.time &&
      e.maxTeamSize === event.maxTeamSize
    )
  );

  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center mt-6">Medha - Event Portal</h1>

      {/* Admin section to add events */}
      <section className="mt-8 px-4">
        <AdminDashboard onEventAdded={handleEventAdded} />
      </section>

      {/* List available events */}
      <section className="mt-12 px-4">
        <h2 className="text-xl font-semibold mb-4" style={{ textAlign: 'center', color: '#312e81', letterSpacing: '1px', textShadow: '0 2px 8px #a5b4fc55' }}>Available Events</h2>
        {uniqueEvents.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '1.1rem' }}>No events available</p>
        ) : (
          <div style={{ overflowX: 'auto', margin: '0 auto', maxWidth: '1100px', borderRadius: '18px', boxShadow: '0 8px 32px 0 rgba(99,102,241,0.18), 0 1.5px 8px 0 #6366f122', background: 'linear-gradient(90deg, #f3f4f6 0%, #e0e7ff 100%)', padding: '32px 24px', marginBottom: '48px' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: 0,
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 2px 16px rgba(99,102,241,0.10)',
              minWidth: '700px',
              overflow: 'hidden',
            }}>
              <thead>
                <tr style={{ background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)' }}>
                  <th style={{ padding: '16px', borderBottom: '2px solid #e0e7ff', textAlign: 'left', fontWeight: 700, color: '#fff', fontSize: '1.1rem', letterSpacing: '0.5px' }}>Event Name</th>
                  <th style={{ padding: '16px', borderBottom: '2px solid #e0e7ff', textAlign: 'left', fontWeight: 700, color: '#fff', fontSize: '1.1rem', letterSpacing: '0.5px' }}>Description</th>
                  <th style={{ padding: '16px', borderBottom: '2px solid #e0e7ff', textAlign: 'left', fontWeight: 700, color: '#fff', fontSize: '1.1rem', letterSpacing: '0.5px' }}>Venue</th>
                  <th style={{ padding: '16px', borderBottom: '2px solid #e0e7ff', textAlign: 'left', fontWeight: 700, color: '#fff', fontSize: '1.1rem', letterSpacing: '0.5px' }}>Date</th>
                  <th style={{ padding: '16px', borderBottom: '2px solid #e0e7ff', textAlign: 'left', fontWeight: 700, color: '#fff', fontSize: '1.1rem', letterSpacing: '0.5px' }}>Time</th>
                  <th style={{ padding: '16px', borderBottom: '2px solid #e0e7ff', textAlign: 'center', fontWeight: 700, color: '#fff', fontSize: '1.1rem', letterSpacing: '0.5px' }}>Max Team Size</th>
                </tr>
              </thead>
              <tbody>
                {uniqueEvents.map((event, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #e5e7eb', background: index % 2 === 0 ? '#f8fafc' : '#e0e7ff' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: '#3730a3', fontSize: '1.05rem' }}>{event.name}</td>
                    <td style={{ padding: '14px 16px', color: '#374151', fontSize: '1.01rem' }}>{event.description}</td>
                    <td style={{ padding: '14px 16px', color: '#2563eb', fontWeight: 500 }}>{event.venue}</td>
                    <td style={{ padding: '14px 16px', color: '#1e293b', fontWeight: 500 }}>{event.date}</td>
                    <td style={{ padding: '14px 16px', color: '#059669', fontWeight: 500 }}>{event.time}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', color: '#7c3aed', fontWeight: 700, fontSize: '1.08rem' }}>{event.maxTeamSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
