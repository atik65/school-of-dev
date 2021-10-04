import React from "react";
import "./login.css";
import image from "../../images/undraw_Login_re_4vu2.svg";
const Login = () => {
  return (
    <div>
      <div className="row login">
        <div className="col-md-6 pt-4 ps-5">
          <img src={image} alt="" />
        </div>
        <div className="col-md-6 p-5">
          <form className="pt-5 p-2">
            <div class="form-group my-3 row">
              <label class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div class="form-group my-3 row">
              <label class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Your Password"
                />
              </div>
            </div>

            <button className="btn btn-outline-success btn-sm mt-3">
              Log In Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
