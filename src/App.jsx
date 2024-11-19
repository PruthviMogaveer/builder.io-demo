import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import BuilderPage from '../src/components/figma-imports';
import ContactBuilder from '../src/components/Contact-builder';
import { BuilderComponent } from '@builder.io/sdk'

function App() {
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/contact-builder" element={<ContactBuilder />} />
      </Routes>
    </Router>
  )
}

export default App
