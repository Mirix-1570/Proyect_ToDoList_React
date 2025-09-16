import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tareas from '../pages/Tareas';
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/Tareas" element={<Tareas/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default Routing
