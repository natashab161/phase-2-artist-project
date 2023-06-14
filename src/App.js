import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import UserLocationsMap from "./UserLocationsMap";

import Home from "./Home";
import EventsMap from "./EventsMap";
import Create from "./Create";



function App() {
  return (
    <div className="App">
      <nav>
        <ul className="navBar">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/Create">create</Link>
          </li>
          <li>
            <Link to="/Login">login</Link>
          </li>
          <li>
            <Link to="/ProfilePage">profile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/EventsMap" element={<EventsMap />} />
      </Routes>
      <Login />

      <UserStatus />

      
    </div>
  );
}

export default App;