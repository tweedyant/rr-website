import React from 'react';
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#222', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
      <Link to="/members" style={{ marginRight: '1rem', color: 'white' }}>Members</Link>
      <Link to="/dao" style={{ color: 'white' }}>Dao</Link>
    </nav>
  );
}

export default Navbar;
