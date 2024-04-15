/* eslint-disable react/prop-types */
import { useState } from "react";

export function CapstonesIndex(props) {
  return (
    <div>
      <h2> All Capstones:</h2>
      <div id="capstones-index">
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-5">
            {props.capstones.map((capstone) => (
              <div key={capstone.id} className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{capstone.capstone_project_name}</h5>
                    <p className="card-text">{capstone.description}</p>
                    <img src={capstone.screenshot} className="card-img-top" alt={capstone.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
