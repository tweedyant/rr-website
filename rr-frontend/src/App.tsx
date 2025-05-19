import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Dao from './pages/Dao'
import Members from './pages/Members';

function App() {
  return (
    
    <div className="App">
      
      

      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/members" element = {<Members/>}/>
      <Route path = "/dao" element = {<Dao/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
