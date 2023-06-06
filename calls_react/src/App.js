import React from "react";
// import {
//   Routes,
//   Route,
// } from "react-router-dom";
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';


export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

