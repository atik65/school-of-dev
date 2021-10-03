import React from "react";
import "./footer.css";

import { FcPhone } from "react-icons/fc";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-6 p-5">
          <p>
            <ImLocation /> Dhaka 1215
          </p>
          <p>
            <FcPhone /> +88011111111111
          </p>
          <p>
            <AiOutlineMail /> demo@email.com
          </p>
        </div>
        <div className="col-6 p-5">
          <h4 className="">About us</h4>
          <small>
            Teaching is one of the most challenging and complex jobs on the
            planet. Our digital resources, tools, and learning materials are
            developed by educational experts to incorporate leading pedagogical
            practices. They are useful in any type of teaching moment and many
            can be used to support national education standards.{" "}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
