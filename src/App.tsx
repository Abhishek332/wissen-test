import React from 'react'
import { Authenticator, Home } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authenticator />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App