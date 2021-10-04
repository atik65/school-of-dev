import React, { useEffect, useState } from "react";
import "./home.css";

import image from "../../images/undraw_Developer_activity_re_39tg.svg";
import CourseCard from "../courseCard/CourseCard";
import { FcApproval } from "react-icons/fc";

const Home = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("https://atik65.github.io/fakeData/")
      .then((response) => response.json())
      .then((data) => setCourse(data.slice(0, 4)));
  }, []);

  return (
    <div className="home py-5">
      <div className="row">
        <div className="col-md-6 ps-4">
          <img className="homeImg" src={image} alt="hello" />
        </div>
        <div className="col-md-6 ps-4">
          <h3>
            Popular Courses <FcApproval />
          </h3>
          <div className="dashborad-card-container">
            {course &&
              course.map((item) => <CourseCard key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
