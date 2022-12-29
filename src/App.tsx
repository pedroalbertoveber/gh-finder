import Home from 'pages/Home';
import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
