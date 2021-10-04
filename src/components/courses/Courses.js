import React, { useState, useEffect } from "react";
import CourseCard from "../courseCard/CourseCard";
import "./courses.css";

const Courses = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("https://atik65.github.io/fakeData/")
      .then((response) => response.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div className="course container py-5">
      {course.map((item) => (
        <CourseCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Courses;
