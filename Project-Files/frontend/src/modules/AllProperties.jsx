import React, { useState, useEffect } from 'react';
   import apiRequest from '../../utils/api.js';

   const AllProperties = () => {
     const [properties, setProperties] = useState([]);

     useEffect(() => {
       const fetchProperties = async () => {
         try {
           const data = await apiRequest('/admin/properties', 'GET', null, localStorage.getItem('token'));
           setProperties(data);
         } catch (error) {
           console.error('Fetch properties error:', error.message);
         }
       };
       fetchProperties();
     }, []);

     return (
       <div className="min-h-screen bg-gray-100 p-8">
         <h1 className="text-3xl font-bold mb-6">All Properties</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {properties.map((property) => (
             <div key={property._id} className="bg-white p-4 rounded shadow-md">
               <h2 className="text-xl font-bold">{property.title}</h2>
               <p>{property.description}</p>
               <p>Price: ${property.price}/night</p>
               <p>Location: {property.location}</p>
             </div>
           ))}
         </div>
       </div>
     );
   };

   export default AllProperties;