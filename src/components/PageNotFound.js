import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <div className="errorBackground">
      <h1 className="error">Page Not Found!</h1>
      <button onClick={navigateHandler} className="button btn-dark">
        Home
      </button>
    </div>
  );
}
