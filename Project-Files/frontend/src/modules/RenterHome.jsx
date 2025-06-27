import React from 'react';
   import { Link } from 'react-router-dom';

   const RenterHome = () => {
     return (
       <div className="min-h-screen bg-gray-100 p-8">
         <h1 className="text-3xl font-bold mb-6">Renter Dashboard</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <Link to="/renter/properties" className="bg-blue-500 text-white p-4 rounded text-center">
             Browse Properties
           </Link>
           <Link to="/renter/bookings" className="bg-green-500 text-white p-4 rounded text-center">
             My Bookings
           </Link>
         </div>
       </div>
     );
   };

   export default RenterHome;