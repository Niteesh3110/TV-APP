import React from 'react';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Summary from './pages/Summary.js';

function App() {
  return(
    <Router>
      <Routes>
        <Route path = '/' element={<Home />}/>
        <Route path = '/summary/:showID' element={<Summary />}/>
      </Routes>
    </Router>
    );
};

export default App;
