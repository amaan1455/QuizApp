import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Build from "./Build";
function App() {
  return (<BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
        <Route path="/:id" element={<Build />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}
export default App;