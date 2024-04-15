import React from "react";
import studentData from "../data/dummyData";

const StudentProfile = () => {
  return (
    <div>
      <h1>{studentData.name}</h1>
      <h2>{studentData.capstone_project_name}</h2>
      <img src={studentData.screenshot} alt="" />
      <p>Description: {studentData.description}</p>
    </div>
  );
};

export default StudentProfile;
