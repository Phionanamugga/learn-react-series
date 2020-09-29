import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Jumbtron from "./components/jumbtron/Jumbtron";
import Ideas from "./components/ideas/Ideas";

// importing styles 
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <Navbar />
      <Header />
      <Jumbtron />
      <Ideas />
    </div>
  );
}

export default App;
