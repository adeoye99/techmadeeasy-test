import React from "react";
import Sidebar from "./Components/Sidebarcomponent/Sidebar";
import "./App.css";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites"


function App() {
  return (
    <div className="App" style= {{display: 'flex'}}>
      <Router>
        <Sidebar style={{flex: '1 auto'}}/>
        <Routes>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/favorites" element = {<Favorites/>}/>
        </Routes>
        
      </Router>
      
         
    </div>
  );
}

export default App;
