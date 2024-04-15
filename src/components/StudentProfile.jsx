import React from "react";
import capstones from "../data/dummyData";

const StudentProfile = () => {
  return (
    <div>
      <h1>{capstones.name}</h1>
      <h2>{capstones.capstone_project_name}</h2>
      <img src={capstones.screenshot} alt="" />
      <p>Description: {capstones.description}</p>
    </div>
  );
};

export default StudentProfile;
