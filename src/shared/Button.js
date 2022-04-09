import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button(props) {
  const { url, params, text, iconClass, buttonClass, data } = props;
  return (
    <div className="button" id={buttonClass}>
      <div id="slide"></div>
      {url && (
        <Link className="link" to={`/${url}/${params}`} state={{ data: data }}>
          {text}
        </Link>
      )}
      {iconClass && <i className={`${iconClass} link`}></i>}
    </div>
  );
}
