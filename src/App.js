import React from "react";
import Menu from "./components/Menu";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <SearchBar />
      <Home />
    </div>
  );
}

export default App;
