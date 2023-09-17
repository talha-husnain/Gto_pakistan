import React from 'react';
import { Link } from 'react-router-dom';

const BoxComponent = ({ title, text, backgroundColor, link }) => {
  return (
    <div className="box">
      <span>
        <h1 className="min" style={{ backgroundColor, color: "white" }}>{title}</h1>
        <p>{text}</p>
      </span>
      <button type="button" className="btn btn-primary btn-sm">
        <Link to={link} style={{ color: "white", textDecoration: 'none' }}>Learn More</Link>
      </button>
    </div>
  );
};

export default BoxComponent;
