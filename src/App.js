import React from "react";
import Menu from "./components/Menu";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <Menu />
      </div>
      <div className="main">
        <SearchBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
