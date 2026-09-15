import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MySkills from "./pages/MySkills";
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<MySkills />} />
      </Routes>
      <Footer />
      <Analytics />
    </>
  )
}

export default App