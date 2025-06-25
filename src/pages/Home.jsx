import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100 px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
          Welcome to the Task Manager
        </h1>
        <p className="text-lg text-gray-700">
          This is your dashboard. Use the navigation bar to manage your tasks.
        </p>
      </div>
    </div>
  );
};

export default Home;