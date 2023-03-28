import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import AddTest from './components/addTest';
import ListTest from './components/listTest';
import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<AddTest />} />
          <Route path='/pass-test' element={<ListTest />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;