import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwSnqNkfe7eX6ln840wmkle9Br4ombh9E",
  authDomain: "ksense-78485.firebaseapp.com",
  projectId: "ksense-78485",
  storageBucket: "ksense-78485.appspot.com",
  messagingSenderId: "13050876162",
  appId: "1:13050876162:web:0910530b0558fbc38ef21b",
  measurementId: "G-W9MG4THK02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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

