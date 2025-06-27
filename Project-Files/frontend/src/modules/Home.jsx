import React from 'react';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to HouseHunt</h1>
      <p className="mb-4">Find your perfect rental home today!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded">Explore Properties</div>
        <div className="bg-gray-100 p-4 rounded">Contact Owners</div>
      </div>
    </div>
  );
};

export default Home;