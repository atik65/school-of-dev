import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import image from "../../images/undraw_programming_2svr.svg";
import "./courseDetails.css";

const CourseDetails = () => {
  const { userid } = useParams();
  const [courses, setCourse] = useState([]);
  const [filterd, setFiltered] = useState({});

  useEffect(() => {
    fetch("https://atik65.github.io/fakeData/")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  useEffect(() => {
    const filterd = courses?.find((item) => item.id === parseInt(userid));
    setFiltered(filterd);
  }, [userid, courses]);
  //   const { course, image, price, id } = filterd;

  return (
    <div>
      <div className="row courseDetails">
        <div className="col-md-6 pt-5">
          <img className="courseDetials-img-svg" src={image} alt="" />
        </div>
        <div className="col-md-6">
          <h2 className="pb-3">Course: {filterd?.course}</h2>
          <img className="courseDetials-img" src={filterd?.image} alt="" />
          <h3 className="py-2">Price: {filterd?.price} Taka</h3>
          <button className="btn mb-2 btn-sm btn-outline-primary">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
