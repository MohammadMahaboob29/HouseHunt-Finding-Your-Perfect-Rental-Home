import React from 'react';
   import { Link } from 'react-router-dom';

   const OwnerHome = () => {
     return (
       <div className="min-h-screen bg-gray-100 p-8">
         <h1 className="text-3xl font-bold mb-6">Owner Dashboard</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <Link to="/owner/add-property" className="bg-blue-500 text-white p-4 rounded text-center">
             Add Property
           </Link>
           <Link to="/owner/properties" className="bg-green-500 text-white p-4 rounded text-center">
             My Properties
           </Link>
           <Link to="/owner/bookings" className="bg-yellow-500 text-white p-4 rounded text-center">
             My Bookings
           </Link>
         </div>
       </div>
     );
   };

   export default OwnerHome;