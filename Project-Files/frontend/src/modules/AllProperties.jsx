import React, { useState, useEffect } from 'react';
   import apiRequest from '../../utils/api.js';

   const AllProperties = () => {
     const [properties, setProperties] = useState([]);
     const [startDate, setStartDate] = useState('');
     const [endDate, setEndDate] = useState('');

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

     const handleBook = async (propertyId) => {
       try {
         const data = await apiRequest('/user/bookings', 'POST', {
           propertyId,
           startDate,
           endDate,
         }, localStorage.getItem('token'));
         alert(`Booking created: ${data._id}`);
       } catch (error) {
         console.error('Booking error:', error.message);
       }
     };

     return (
       <div className="min-h-screen bg-gray-100 p-8">
         <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
         <div className="mb-4">
           <input
             type="date"
             value={startDate}
             onChange={(e) => setStartDate(e.target.value)}
             className="p-2 border rounded mr-2"
           />
           <input
             type="date"
             value={endDate}
             onChange={(e) => setEndDate(e.target.value)}
             className="p-2 border rounded"
           />
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {properties.map((property) => (
             <div key={property._id} className="bg-white p-4 rounded shadow-md">
               <h2 className="text-xl font-bold">{property.title}</h2>
               <p>{property.description}</p>
               <p>Price: ${property.price}/night</p>
               <p>Location: {property.location}</p>
               <button
                 onClick={() => handleBook(property._id)}
                 className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
               >
                 Book Now
               </button>
             </div>
           ))}
         </div>
       </div>
     );
   };

   export default AllProperties;