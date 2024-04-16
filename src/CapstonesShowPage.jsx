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
    <div id="capstones-show" className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-3">
            {capstone.first_name} {capstone.last_name}
          </h2>
          <h3 className="card-subtitle mb-3">{capstone.name}</h3>
          <p className="card-text mb-3">{capstone.description}</p>
          <p className="card-text mb-3">
            Capstone URL:
            <a href="https://github.com/andytdietz/mini-capstone-api" target="_blank" rel="noopener noreferrer">
              https://github.com/andytdietz/mini-capstone-api
            </a>
          </p>
          <img src={capstone.screenshot} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
