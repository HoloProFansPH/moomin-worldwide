//import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import Home from './Home'
import ComingSoon from "./ComingSoon.tsx";

function App() {
  //const [count, setCount] = useState(0)

  return (
      <Router>
          <div id="bodyDiv">
              <Routes>
                  <Route path="/home-test" element={<Home />} />
                  <Route path="/" element={<ComingSoon />} />
              </Routes>
          </div>
          <img id="bgGlobe" src="public/img/moomin moa web.webp" alt="MOA Globe"/>
      </Router>
  )
}

export default App
