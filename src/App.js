import './App.css';
import Homepage from './Components/Homepage.js';
import Manga from './Components/Manga.js';
import Chapter from './Components/Chapter.js';

import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route exact path="/manga/:id" element={<Manga />} />
          <Route exact path="/manga/:mangaId/:id" element={<Chapter />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App;
