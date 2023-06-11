import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Summary from './pages/Summary.js';
import BookingConfirmed from './components/BookingConfirmed.js';

function App() {
  return(
    <Router>
      <Routes>
        <Route path = '/' element={<Home />}/>
        <Route path = '/summary/:showID' element={<Summary />}/>
        <Route path = '/bookingconfirmed' element={<BookingConfirmed/>}/>
      </Routes>
    </Router>
    );
};

export default App;
