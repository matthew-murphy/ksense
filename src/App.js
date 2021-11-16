import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    );
  }
}
export default App;

