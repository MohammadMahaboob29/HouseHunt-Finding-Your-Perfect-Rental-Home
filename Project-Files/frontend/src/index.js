import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './modules/Home.jsx';
import Login from './modules/Login.jsx';
import Register from './modules/Register.jsx';
import ForgotPassword from './modules/ForgotPassword.jsx';

import AdminHome from './modules/AdminHome.jsx';
import AllUsers from './modules/AllUsers.jsx';
import AllPropertiesAdmin from './modules/AllProperties.jsx';
import AllBookingsAdmin from './modules/AllBookings.jsx';

import OwnerHome from './modules/OwnerHome.jsx';
import AddProperty from './modules/AddProperty.jsx';
import AllPropertiesOwner from './modules/AllProperties.jsx';
import AllBookingsOwner from './modules/AllBookings.jsx';

import RenterHome from './modules/RenterHome.jsx';
import AllPropertiesRenter from './modules/AllProperties.jsx';
import RenterBookings from './modules/RenterBookings.jsx';

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
); evi plaste chei
