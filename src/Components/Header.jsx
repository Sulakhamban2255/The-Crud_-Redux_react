import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to = '/' className="text-decoration-none">
   
    <header>
      <style>
        {`
          .header {
            background-color: #343a40;
            color: blue;
            padding: 1rem 0;
          }

          .header-content {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .header-icon {
            font-size: 1.5rem;
            margin-right: 0.5rem;
          }

          .header-title {
            font-size: 2rem;
            margin: 0;
            color:white;
          }
        `}
      </style>
      <div className="header">
        <div className="header-content">
          <FontAwesomeIcon icon={faUser} className="header-icon" />
          <h1 className="header-title">Registration</h1>
        </div>
      </div>
    </header>
    </Link>
  );
}

export default Header;
