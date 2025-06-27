import React, { useState, useEffect } from 'react';

const AllPropertiesCards = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from backend
    fetch('/api/user/properties')
      .then(res => res.json())
      .then(data => setProperties(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {properties.map(property => (
        <div key={property.propertyId} className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{property.prop_address}</h2>
          <p>Rent: ${property.prop_amt}</p>
          <p>Availability: {property.isAvailable ? 'Available' : 'Not Available'}</p>
          <button className="mt-2 bg-blue-500 text-white p-2 rounded">Get Info</button>
        </div>
      ))}
    </div>
  );
};

export default AllPropertiesCards;