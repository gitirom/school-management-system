import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Classes from "./components/Classes";
import {Routes, Route} from "react-router-dom";






function App() {
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/classes" element={<Classes />} />
    </Routes>
    
    </>
  );
}

export default App;
