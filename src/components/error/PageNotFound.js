import React from "react";
import "./error.css";
import image from "../../images/undraw_page_not_found_su7k.svg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="error">
      <img src={image} alt="" />
      <h1 className="pb-2">Page Not Found!!</h1>
      <Link to="/">
        <Button size="sm" variant="outline-primary">
          {" "}
          Back to DashBoard{" "}
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
