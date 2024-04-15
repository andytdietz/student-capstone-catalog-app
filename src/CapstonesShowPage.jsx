import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import capstones from "./data/dummyData";

export function CapstonesShowPage() {
  const [capstone, setCapstone] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const foundCapstone = capstones.find((capstone) => capstone.id === parseInt(id));
    setCapstone(foundCapstone);
  }, [id]);
  return (
    <div id="capstones-show">
      <h2>{capstone.name}</h2>
      <h3>{capstone.capstone_project_name}</h3>
      <p>{capstone.description}</p>
      <p>
        URL:
        <a href="https://github.com/andytdietz/mini-capstone-api" target="_blank" rel="noopener noreferrer">
          https://github.com/andytdietz/mini-capstone-api
        </a>
      </p>
      <img src={capstone.screenshot} alt="" />
    </div>
  );
}
