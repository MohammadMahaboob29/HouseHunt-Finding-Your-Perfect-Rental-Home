import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import "./App.css";
import Home from "./modules/Home";
import Login from "./modules/Login";
import Register from "./modules/Register";
import ForgotPassword from "./modules/ForgotPassword";
import AdminHome from "./modules/AdminHome";
import OwnerHome from "./modules/OwnerHome";
import RenterHome from "./modules/RenterHome";

export const UserContext = createContext();

function App() {
  const [userData, setUserData] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserData(user);
      setUserLoggedIn(true);
    }
  }, []);

  const date = new Date().getFullYear();

  return (
    <UserContext.Provider value={{ userData, userLoggedIn }}>
      <div className="App">
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />

              {userLoggedIn ? (
                <>
                  <Route path="/adminhome" element={<AdminHome />} />
                  <Route path="/ownerhome" element={<OwnerHome />} />
                  <Route path="/renterhome" element={<RenterHome />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/login" />} />
              )}
            </Routes>
          </div>

          <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3">
              © {date} Copyright: RentEase
            </div>
          </footer>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
