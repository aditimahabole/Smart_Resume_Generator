import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Navbar from './components/Navbar/Navbar'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Body />
    </div>
  );
}

export default App;
