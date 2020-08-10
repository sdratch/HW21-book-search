import React from "react";

const index = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <h3>Google Books Search</h3>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/search">
          Search
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/saved">
          Saved
        </a>
      </li>
    </ul>
  );
};

export default index;
