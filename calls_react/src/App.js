import React from "react";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import BalanceDate from "./components/BalanceDate/BalanceDate.jsx";
import Main from "./components/Main/Main.jsx";
import Filtres from "./components/Filtres/Filtres.jsx";


export default function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <BalanceDate />
      <Filtres />
      <Main />
    </div>
  );
}

