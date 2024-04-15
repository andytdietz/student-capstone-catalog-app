/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

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
                  <div className="card text-center">
                    <div className="card-body">
                      <h4 className="card-title-center">{capstone.capstone_project_name}</h4>
                      <h4 className="card-text-center">{capstone.name}</h4>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => props.onShowCapstone(capstone)}
                      >
                        More info
                      </button>
                      <img src={capstone.screenshot} className="card-img-bottom" alt={capstone.name} />
                    </div>
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
