import React from "react";
import "./App.css";
import HeroImage from "./components/HeroImage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar />
      </div>
      <div>
          <HeroImage />
      </div>
    </div>
  );
}

export default App;
