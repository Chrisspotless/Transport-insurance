import { useState } from 'react'
import { Routes, Route } from "react-router";
import './App.css'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import About from "./About";
import Contact from "./Contact";
import View from './View.jsx';
import Layout from './Layout.jsx';



function App() {
  return (
    <main>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;


