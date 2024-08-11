import React from "react";

function Footer() {
  return (
    <footer>
      <style>
        {`
          .footer {
            background-color: #343a40;
            color: white;
            text-align: center;
            padding: 1rem;
            font-size: 0.875rem;
          }
          
          .footer a {
            color: #f8f9fa;
            text-decoration: none;
            margin: 0 0.5rem;
          }

          .footer a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="footer">
        <p>&copy; 2024 Luminar Technolab. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
