import React from 'react';

const RenterBookings = () => {
  // Sample booking data (to be replaced with API call later)
  const bookings = [
    { id: 1, property: "Apartment 101", status: "Pending", date: "2025-06-25" },
    { id: 2, property: "House 202", status: "Pending", date: "2025-06-26" },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Renter Bookings</h1>
      <p>View and manage your booking requests below.</p>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4' }}>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Property</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} style={{ border: '1px solid #ddd' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.property}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.status}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RenterBookings;