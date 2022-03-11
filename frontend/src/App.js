import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Reset from "./components/authentication/Reset";
import Dashboard from "./components/game/Dashboard";


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
 
      <div>
        <Router>
          <Routes>
          {/* <Route exact path='/' element={Home} /> */}
            <Route path='/counter' element={Counter} />
            <Route path='/fetch-data' element={FetchData} />
          
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
      </Router>
      </div>
  );
}

export default App;
