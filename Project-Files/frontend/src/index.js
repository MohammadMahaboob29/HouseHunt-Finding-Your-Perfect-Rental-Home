import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './modules/common/Home.jsx';
import Login from './modules/common/Login.jsx';
import Register from './modules/common/Register.jsx';
import ForgotPassword from './modules/common/ForgotPassword.jsx';

import AdminHome from './modules/admin/AdminHome.jsx';
import AllUsers from './modules/admin/AllUsers.jsx';
import AllPropertiesAdmin from './modules/admin/AllProperties.jsx';
import AllBookingsAdmin from './modules/admin/AllBookings.jsx';

import OwnerHome from './modules/owner/OwnerHome.jsx';
import AddProperty from './modules/owner/AddProperty.jsx';
import AllPropertiesOwner from './modules/owner/AllProperties.jsx';
import AllBookingsOwner from './modules/owner/AllBookings.jsx';

import RenterHome from './modules/renter/RenterHome.jsx';
import AllPropertiesRenter from './modules/renter/AllProperties.jsx';
import RenterBookings from './modules/renter/RenterBookings.jsx';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/users" element={<AllUsers />} />
      <Route path="/admin/properties" element={<AllPropertiesAdmin />} />
      <Route path="/admin/bookings" element={<AllBookingsAdmin />} />
      <Route path="/owner" element={<OwnerHome />} />
      <Route path="/owner/add-property" element={<AddProperty />} />
      <Route path="/owner/properties" element={<AllPropertiesOwner />} />
      <Route path="/owner/bookings" element={<AllBookingsOwner />} />
      <Route path="/renter" element={<RenterHome />} />
      <Route path="/renter/properties" element={<AllPropertiesRenter />} />
      <Route path="/renter/bookings" element={<RenterBookings />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);