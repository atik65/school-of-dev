import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import image from "../../images/icon.png";

const Header = () => {
  return (
    <>
      <div className="row header">
        <div className="col-md-4 ps-md-5 ps-4">
          <h2 className="">
            {" "}
            <img src={image} alt="" /> School Of Development
          </h2>
          <small>Learn how to Code</small>
        </div>
        <div className="col-md-8">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
