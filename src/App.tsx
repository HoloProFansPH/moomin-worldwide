//import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import Home from './Home.tsx'
import ComingSoon from "./ComingSoon.tsx";
import SocMedButton from "./components/SocMedButton.tsx";
import React from "react";

function App() {
  //const [count, setCount] = useState(0)

  return (
      <Router>
          <div id="bodyDiv">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/soon" element={<ComingSoon/>}/>
              </Routes>
              <div className="socmedRow">
                  <SocMedButton link="https://facebook.com/MoominManila" icon="fab fa-facebook-f" />
                  <SocMedButton link="https://twitter.com/MoominManila" icon="fab fa-twitter" />
                  <SocMedButton link="mailto:moominmanila@gmail.com" icon="fas fa-envelope" />
              </div>
              <p id="credits">
                  Project organized by Moomin' Manila / Moomin' Worldwide.<br/>
                  With technical support from HoloPro Fans PH.<br/>
                  This is a non-profit fan-made project.<br/>
                  Not affiliated with COVER Corp.
              </p>
          </div>
          <img id="bgGlobe" src="/img/moomin moa web.webp" alt="MOA Globe"/>
          <img id="bg" src="/img/bg.webp" alt="BG"/>
      </Router>
  )
}

export default App
