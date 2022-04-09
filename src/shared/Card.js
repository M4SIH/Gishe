import React from "react";

export default function Card(props) {
  const { title, src, summary, genre } = props.data;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={src}
            className="img-fluid rounded-start"
            alt={title}
            loading="lazy"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{summary}</p>
            <p className="card-text">
              <small className="text-muted">{genre}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
