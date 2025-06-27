import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/admin/users" className="bg-blue-500 text-white p-4 rounded text-center">
          Manage Users
        </Link>
        <Link to="/admin/properties" className="bg-green-500 text-white p-4 rounded text-center">
          Manage Properties
        </Link>
        <Link to="/admin/bookings" className="bg-yellow-500 text-white p-4 rounded text-center">
          Manage Bookings
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;