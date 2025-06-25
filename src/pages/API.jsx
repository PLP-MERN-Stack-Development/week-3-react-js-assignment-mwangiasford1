import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './Home';
import Tasks from './Tasks';
import API from './API'; // Import the API component


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="api" element={<API />} />
      </Route>
    </Routes>
  );
}

export default App;