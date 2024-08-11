import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={" p-6 text-gray-200 bg-gray-700"}>
      <div>
        <ul className="flex flex-row justify-center gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
