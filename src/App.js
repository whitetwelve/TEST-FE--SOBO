import React, { useState } from 'react';
import Landing from './pages/Landing';
import { Routes, Route } from "react-router-dom"
import Source from './components/Source';


function App() {
  return (
    <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/src' element={<Source/>}/>
    </Routes>
  );
}

export default App;
