import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import LoginForm from "./components/Login/LoginForm";
import Navbar from "./components/MainHeader/Navbar";
import Movie from "./components/Movies/Movie";
import MoviesTable from "./components/Movies/MoviesTable";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [userInformation, setUserInformation] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = (username, password) => {
    setUserInformation({
      username: username,
      password: password,
    });
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <React.Fragment>
      <Navbar
        userInformation={userInformation}
        isLoggedIn={isLoggedIn}
        onLogout={logoutHandler}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movies" element={<MoviesTable />} />
        <Route
          path="/loginform"
          element={<LoginForm onLogin={loginHandler} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
