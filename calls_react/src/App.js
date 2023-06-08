import React from "react";
// import {
//   Routes,
//   Route,
// } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import  Sidebar  from './components/Sidebar/Sidebar.jsx';
// import  Main  from './components/Main';


export default function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      {/* <Main /> */}
    </div>
  );
}

