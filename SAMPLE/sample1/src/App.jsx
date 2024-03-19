import './App.css'
import Signup from './Components/Signup'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Components/Login'
import LandingPage from './Components/LandingPage';
function App() {

  return (
    <>
      <div>
        <Router >
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/lp" element={<LandingPage/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App