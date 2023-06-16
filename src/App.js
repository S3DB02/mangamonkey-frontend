import './App.css';
import Homepage from './Components/Homepage.js';
import Manga from './Components/Manga.js';
import Chapter from './Components/Chapter.js';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';

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
          <Route exact path="/login" element={<LoginButton />} />
          <Route exact path="/logout" element={<LogoutButton />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App;
