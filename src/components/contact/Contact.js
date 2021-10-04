import React from "react";
import "./contact.css";
import image from "../../images/undraw_contact_us_15o2.svg";
import { FcAssistant } from "react-icons/fc";
const Contact = () => {
  return (
    <div className="">
      <div className="row contact">
        <h3 className="text-center pt-3">
          Contact Us
          <FcAssistant />
        </h3>
        <div className="col-md-6 p-5 pt-3">
          <img className="p-5" src={image} alt="" />
        </div>
        <div className="col-md-6 p-5 pt-3">
          <form>
            <div class="form-group my-3 row">
              <label class="col-sm-2 col-form-label">First Name</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div class="form-group my-3 row">
              <label class="col-sm-2 col-form-label">Last Name</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div class="form-group my-3 row">
              <label class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  placeholder="email@email.com"
                />
              </div>
            </div>
            <div class="form-group my-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Message
              </label>
              <div class="col-sm-10">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <button className="btn btn-outline-primary btn-sm m-1">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
