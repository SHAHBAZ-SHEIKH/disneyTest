import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Login from "./components/Login";
import MyState from "./components/context/MyState";
import Detail from './components/Detail';




function App() {
  return (
    
    <div className="App">
        <MyState>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
    </MyState>
      </div>
  );
}

export default App;
