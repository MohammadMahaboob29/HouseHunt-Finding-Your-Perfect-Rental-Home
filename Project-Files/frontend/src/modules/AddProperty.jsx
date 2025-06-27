import React, { useState } from 'react';
   import { useNavigate } from 'react-router-dom';
   import apiRequest from '../../utils/api.js';

   const AddProperty = () => {
     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
     const [price, setPrice] = useState('');
     const [location, setLocation] = useState('');
     const navigate = useNavigate();

     const handleSubmit = async (e) => {
       e.preventDefault();
       try {
         const data = await apiRequest('/owner/properties', 'POST', { title, description, price, location }, localStorage.getItem('token'));
         navigate('/owner/properties');
       } catch (error) {
         console.error('Add property error:', error.message);
       }
     };

     return (
       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
         <div className="bg-white p-8 rounded shadow-md w-96">
           <h2 className="text-2xl font-bold mb-4">Add Property</h2>
           <form onSubmit={handleSubmit}>
             <input
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               placeholder="Title"
               className="w-full p-2 mb-4 border rounded"
             />
             <textarea
               value={description}
               onChange={(e) => setDescription(e.target.value)}
               placeholder="Description"
               className="w-full p-2 mb-4 border rounded"
             />
             <input
               type="number"
               value={price}
               onChange={(e) => setPrice(e.target.value)}
               placeholder="Price per night"
               className="w-full p-2 mb-4 border rounded"
             />
             <input
               type="text"
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               placeholder="Location"
               className="w-full p-2 mb-4 border rounded"
             />
             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
               Add Property
             </button>
           </form>
         </div>
       </div>
     );
   };

   export default AddProperty;