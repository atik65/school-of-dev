import React from "react";
import { Link } from "react-router-dom";
import "./courseCard.css";

const CourseCard = ({ item }) => {
  const { course, image, price, id } = item;
  return (
    <div>
      <div className="courseCard">
        <Link to={`/courses/${id}`}>
          <img src={image} alt="Couse Image" />
          <p className="mt-2">{course}</p>
          <p> Pirce: {price} </p>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
