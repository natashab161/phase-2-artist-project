import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import UserLocationsMap from "./UserLocationsMap";

import ProfilePage from "./ProfilePage";
import Home from "./Home";
import About from "./About";
import EventsMap from "./EventsMap";
import Login from "./Login";


function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <nav>
        <ul className="navBar">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/About">about</Link>
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