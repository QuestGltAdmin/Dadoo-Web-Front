import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>

  )
}

export default App
