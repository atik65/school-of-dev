import React from "react";
import "./aboutUs.css";
import image from "../../images/undraw_Team_spirit_re_yl1v.svg";
import { FcBookmark } from "react-icons/fc";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="row">
        <div className="col-md-6 p-5">
          <p>
            Teaching is one of the most challenging and complex jobs on the
            planet. Our digital resources, tools, and learning materials are
            developed by educational experts to incorporate leading pedagogical
            practices. They are useful in any type of teaching moment and many
            can be used to support national education standards.
          </p>
          <h3 className="py-3">We are Providing-</h3>
          <h6>
            <FcBookmark /> Best Learning Resources
          </h6>
          <h6>
            <FcBookmark /> Reasonable Price
          </h6>
          <h6>
            <FcBookmark /> 24/7 Service
          </h6>
          <Link to="/courses">
            <button className="btn btn-outline-dark mt-3">
              Explore Our Courses
            </button>
          </Link>
        </div>
        <div className="col-md-6">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
