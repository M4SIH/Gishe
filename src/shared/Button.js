import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button(props) {
  const { url, params, text, icon, buttonId, data } = props;
  return (
    <div className="button" id={buttonId}>
      <div id="slide"></div>
      <Link className="link" to={`/${url}/${params}`} state={{ data: data }}>
        {text}
      </Link>
      {icon && <i className="bi bi-ticket-perforated-fill link"></i>}
    </div>
  );
}
