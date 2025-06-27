import React, { useState, useEffect } from 'react';

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/bookings', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Fetch bookings error:', error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">All Bookings</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2">Property</th>
              <th className="p-2">User</th>
              <th className="p-2">Dates</th>
              <th className="p-2">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td className="p-2">{booking.property.title}</td>
                <td className="p-2">{booking.user.name}</td>
                <td className="p-2">{booking.startDate} to {booking.endDate}</td>
                <td className="p-2">${booking.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBookings;