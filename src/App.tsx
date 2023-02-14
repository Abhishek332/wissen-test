import React from 'react'
import { Authenticator, Home, TreeRoot } from "./pages";
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
        <Route path="/treeroot" element={<TreeRoot />} />
      </Routes>
    </Router>
  )
}

export default App